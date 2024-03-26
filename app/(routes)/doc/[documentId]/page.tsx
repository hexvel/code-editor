'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

interface DocumentIdPageProps {
	params: {
		documentId: Id<'code'>
	}
}

const DocumentPage = ({ params }: DocumentIdPageProps) => {
	const Editor = useMemo(
		() =>
			dynamic(() => import('@/components/editor'), {
				ssr: false,
			}),
		[]
	)

	const document = useQuery(api.code.getById, {
		id: params.documentId,
	})

	return (
		<>
			{document === undefined || document.content == undefined ? (
				<div>
					<div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
						<div className='space-y-4 pl-8 pt-4'>
							<Skeleton className='h-14 w-[50%]' />
							<Skeleton className='h-4 w-[80%]' />
							<Skeleton className='h-4 w-[40%]' />
							<Skeleton className='h-4 w-[60%]' />
						</div>
					</div>
				</div>
			) : (
				<Editor content={document.content} editable={false} />
			)}
		</>
	)
}

export default DocumentPage

'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'
import { Input } from '@/components/ui/input'
import Title from '@/components/ResbuleTitle'

const Search = ({ search }: { search?: string }) => {
    const router = useRouter()
    const initialRender = useRef(true)
    const domainPattern = /^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;

    const [text, setText] = useState(search)
    const query = useDebounce(text, 1000)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (!query) {
            router.push(`/domains`)
        } else if (query.length > 0 && domainPattern.test(query)) {
            router.push(`/domains?search=${query}`)
        } else {
            router.push(`/domains`)
        }
    }, [query, router])

    return (
        <div className='py-20 flex flex-col justify-center items-center' >
            <Title className='pb-14' title='Check Domains' colored='Availability' />
            <Input className='rounded-md shadow-sm w-full max-w-lg py-8' onChange={e => setText(e.target.value)} type="text" placeholder="Search..." />
        </div>
    )
}

export default Search
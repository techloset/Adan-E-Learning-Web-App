import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'E-Learning Meeting',
    description: '',
}
export default async function Meetinglayout(
    { children }: { children: React.ReactNode }) {
    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.2]'>
            {children}
        </div>
    )
}

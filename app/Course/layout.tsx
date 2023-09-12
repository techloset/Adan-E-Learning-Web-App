import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'E-Learning Course Page',
    description: '',
}
export default async function Courselayout(
    { children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'E-Learning Blog Page',
    description: 'A platform to help the new generation in their jounery',
}
export default async function BlogLayout(
    { children }: { children: React.ReactNode }) {



    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

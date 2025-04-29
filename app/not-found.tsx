import { AvatarHeading } from '@/src/components/AvatarHeading'
import { Banner } from '@/src/components/Banner'
import { Center } from '@/src/components/Center'
import { Divider } from '@/src/components/Divider'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Center>
      <Banner>
        <AvatarHeading title="Item not found ⚠️" />
        <Divider width='350px' />
        <p>The Item you're looking for is not found or not available.</p>
        Navgate: <Link href={"/"} className='text-accent hover:text-accentHover'>Home</Link>
      </Banner>
    </Center>
  )
}
/** @jsxImportSource theme-ui **/
import { Flex, Themed } from 'theme-ui'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })
import ArrowBack from '../../public/images/arrow-back.svg'

type HeaderProps = {
  title?: string
  onDark?: boolean
  backNav?: string
}

const Header = ({ title, onDark, backNav }: HeaderProps) => {
  const router = useRouter()
  return (
    <header
      role="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '9.5rem',
        '> *': { display: 'flex' },
        '.col': { flex: 2, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      {title && (
        <Themed.h1
          sx={{
            fontSize: '2.75rem',
            fontWeight: '700',
            lineHeight: '3.25rem',
            letterSpacing: '-0.15rem',
            textAlign: 'left',
            mb: 0,
            color: onDark ? 'white' : 'w3darkGreen',
          }}
        >
          {title}
        </Themed.h1>
      )}
      {backNav && (
        <Flex
          onClick={() => {
            router.back()
          }}
          sx={{ alignItems: 'center', cursor: 'pointer' }}
        >
          <ArrowBack sx={{ mr: 2 }} />
          <Themed.h3
            sx={{
              mb: 0,
              textTransform: 'uppercase',
              color: onDark ? 'white' : 'w3darkGreen',
            }}
          >
            {backNav}
          </Themed.h3>
        </Flex>
      )}
      <div className="col">
        <SignInArea onDark={onDark} />
      </div>
    </header>
  )
}

export default Header

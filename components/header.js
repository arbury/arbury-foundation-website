import { Pane, Text, Link } from 'evergreen-ui'

function Header() {
  return (
    <Pane
      width="100%"
      height={120}
      marginBottom={24}
    >

      <Pane
        display="flex"
        padding={16}
        // background="tint2"
        borderRadius={3}
      >

        <Pane
          flex={1}
          alignItems="center"
          display="flex"
        >
          <Text
            is="a"
            href="/"
            textDecoration="none"
            fontSize={48}
            color="rgba(0,0,0,0.87)"
            lineHeight={1.2}
            fontWeight={400}
            fontFamily="'Playfair Display', serif;"
          >
            The Arbury Foundation
          </Text>
        </Pane>

        <Pane
          alignItems="center"
          display="flex"
          marginTop={16}
        >
          <Text
            is="a"
            href="/"
            textDecoration="none"
            fontSize={28}
            color="rgba(0,0,0,0.87)"
            // lineHeight={1.2}
            // fontWeight={400}
            // fontFamily="'Playfair Display', serif;"
            marginRight={24}
          >
            About
          </Text>
          <Text
            is="a"
            href="/team"
            textDecoration="none"
            fontSize={28}
            color="rgba(0,0,0,0.87)"
            // lineHeight={1.2}
            // fontWeight={400}
            // fontFamily="'Playfair Display', serif;"
          >
            Team
          </Text>
        </Pane>
      </Pane>

    </Pane>
  )
}

export default Header
import { Link, Image, Heading, Pane, Paragraph, Text, UnorderedList, ListItem } from 'evergreen-ui'
import Page from '../components/page'
import Header from '../components/header'
import Footer from '../components/footer'
import Photo from '../components/photo'

function HomePage() {
  return (
    <Page>
      <Text
        textDecoration="none"
        fontSize={28}
        color="rgba(0,0,0,0.87)"
        marginRight={24}
      >
        Team
      </Text>

      <Pane
        marginTop={42}
        display="flex"
      >
        <Pane width={425} marginRight={50}>
          <Photo
            src="/paco.png"
          />

          <Heading
            marginTop={16}
            marginBottom={8}
            fontSize={28}
            lineHeight={1.4}
            color="rgba(0,0,0,0.87)"
          >
            Paco Ruzzante
          </Heading>

          <Heading
            marginTop={8}
            marginBottom={8}
            fontSize={18}
          >
            Co-founder and CEO
          </Heading>

          <Paragraph
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Paco Ruzzante is the CEO of the Arbury Foundation and Chief Editor of Arbury Road.
            Currently, he is also finishing his PhD in Economic History at the University of
            Cambridge. He is investigating the transnational influences of the creation of the
            Mediterranean welfare systems, focusing particularly on the process of European
            integration from the end of the 1940s. He is also a writer and economist.
          </Paragraph>

          <Pane
            marginTop={16}
          >
            <Link
              fontSize={16}
              lineHeight={1.5}
            >
              paco@arburyfoundation.com
            </Link>
          </Pane>

        </Pane>

        <Pane width={425}>
          <Photo
            src="/dario.png"
          />

          <Heading
            marginTop={16}
            marginBottom={8}
            fontSize={28}
            lineHeight={1.4}
            color="rgba(0,0,0,0.87)"
          >
            Dario Palumbo
          </Heading>

          <Paragraph
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Dario is a research fellow in Statistics And Finance at the Faculty of Economics of Ca' Foscari University of Venice and a bye-fellow in Economics at the Homerton College of the University of Cambridge. After having concluded his PhD in Economics at the University of Cambridge and having worked for few years in Capital Markets, he studies the structure of financial markets and its failures with their implications for systemic risk across European countries.
          </Paragraph>

          <Pane
            marginTop={16}
          >
            <Link
              fontSize={16}
              lineHeight={1.5}
            >
              dario@arburyfoundation.com
            </Link>
          </Pane>
        </Pane>
      </Pane>

      <Pane
        display="flex"
        marginTop={42}
      >
        <Pane width={425} marginRight={50}>
          <Photo
            src="/manuel.png"
          />

          <Heading
            marginTop={16}
            marginBottom={8}
            fontSize={28}
            lineHeight={1.4}
            color="rgba(0,0,0,0.87)"
          >
            Manuel Checchin
          </Heading>

          <Paragraph
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Manuel is a consulting Manager. With more than 8 years of experience, he is expert in Digital transformation and industry 4.0 and he belongs to European Center of Excellence for Intelligent Automation where he leads the Finance practice.
          </Paragraph>

          <Pane
            marginTop={16}
          >
            <Link
              fontSize={16}
              lineHeight={1.5}
            >
              manuel@arburyfoundation.com
            </Link>
          </Pane>
        </Pane>

        <Pane width={425}>
          <Photo
            src="/francesco.png"
          />

          <Heading
            marginTop={16}
            marginBottom={8}
            fontSize={28}
            lineHeight={1.4}
            color="rgba(0,0,0,0.87)"
          >
            Francesco Galetta
          </Heading>

          <Paragraph
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Francesco Galetta holds a BA (Hons.) in Human, Social and Political Sciences from the University of Cambridge. His main research interest is the politics and history of the Middle East, and has focused on the Israeli-Palestinian conflict and the Libyan crisis. Next year, he will deepen his knowledge of European foreign policy in the Middle East with an MSc at the London School of Economics and Political Science. In his free time, he coordinates the Cambridge University Italian Society.
          </Paragraph>

          <Pane
            marginTop={16}
          >
            <Link
              fontSize={16}
              lineHeight={1.5}
            >
              francesco@arburyfoundation.com
            </Link>
          </Pane>
        </Pane>
      </Pane>
    </Page>
  )
}

export default HomePage
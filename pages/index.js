import { Heading, Pane, Paragraph, Text, UnorderedList, ListItem } from 'evergreen-ui'
import Page from '../components/page'
import Header from '../components/header'
import Footer from '../components/footer'

function HomePage() {
  return (
    <Page>
      <Pane
        width={600}
        marginBottom={100}
      >

        <Heading
          fontSize={28}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
          marginY={32}
        >
          About the Foundation
        </Heading>

        <Paragraph
          fontSize={16}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
        >
          The Arbury Foundation is a foundation built by Cambridge students
          with the goal of spreading knowledge and stimulating discussion on the following themes:
        </Paragraph>

        <UnorderedList
          marginY={32}
        >
          <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Federal Europe - to make the EU a global actor in security, research and trade
          </ListItem>
          <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            Democratic Europe - to elect directly the President of the EU Commission
          </ListItem>
          {/* <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            European Migration Governance System - to make migration flows sustainable in the long-term.
          </ListItem> */}
          <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            European Green New Deal - to save our endangered planet and sustain economic growth
          </ListItem>
          <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            European Dividend - to transition the continent to a new job market
          </ListItem>
          <ListItem
            fontSize={16}
            lineHeight={1.5}
            color="rgba(0,0,0,0.87)"
          >
            European Welfare System - to safeguard and expand our social rights like public healthcare, public education and state pensions
          </ListItem>
        </UnorderedList>

        <Paragraph
          fontSize={16}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
        >
          The Arbury foundation wants to discuss and spread ideas on these themes to a generalised non-academic public.
        </Paragraph>

        <Heading
          fontSize={28}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
          marginY={32}
        >
          Who we are
        </Heading>

        <Paragraph
          textDecoration="none"
          fontSize={16}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
        >
          We are a group of Cambridge students who shared an apartment in Arbury Road, Cambridge during their studies. Arbury
          is a low-income area in the periphery of Cambridge, where rent is cheaper than elsewhere in the city. There, we began
          discussing ideas around current European political affairs.
        </Paragraph>
        <Paragraph
          marginTop={16}
          textDecoration="none"
          fontSize={16}
          lineHeight={1.5}
          color="rgba(0,0,0,0.87)"
        >
        From those discussions, the idea of this Foundation was
          born. Since our roots are in Arbury, this foundation does not seek to communicate only with urban elites, who already
          are largely Europhile in their political beliefs. Our goal is to talk to people like the people of Arbury: normal
          working people, with day-to-day problems. We are committed to making the ideas and values associated with the EU clearer
          and more understandable. Our mission is to rebuild the trust between EU institutions and all European citizens, while also
          aiming at making the EU closer to citizens' real needs.
        </Paragraph>



      </Pane>
    </Page>
  )
}

export default HomePage
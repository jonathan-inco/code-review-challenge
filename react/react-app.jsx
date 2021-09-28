import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
    }
  }
}

class ButtonComponent extends Component {

  componentDidMount() {
    $('#my-button').on('click', () => doSomeAjaxThing())
  }

  render() {
    return <button id="my-button">Do Something</button>
  }
}

const GridComponent = () => (
  <Body noBottom>
    <Header center>Title</Header>
    <Divider />
    <Background grey>
      <Section height={500}>
        <Grid spacing={16} container>
          <Grid xs={12} sm={6} item>
            <div className={classes.groupsHeader}>
              <Header center>Groups</Header>
            </div>
          </Grid>
          <Grid xs={12} sm={6} item>
            <div>
              <img src={photos.groups} alt="" className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </Section>
    </Background>
    <Background grey>
      <Section height={500}>
        <Grid spacing={16} container>
          <Grid xs={12} sm={6} item>
            <div className={classes.labsHeader}>
              <Header center>Labs</Header>
            </div>
          </Grid>
          <Grid xs={12} sm={6} item>
            <div>
              <img src={photos.labs} alt="" className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </Section>
    </Background>
    <Background grey>
      <Section height={300}>
        <Grid spacing={16} container>
          <Grid xs={12} sm={6} item>
            <div className={classes.partnersHeader}>
              <Header center>Partners</Header>
            </div>
          </Grid>
          <Grid xs={12} sm={6} item>
            <div>
              <img src={photos.partners} alt="" className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </Section>
    </Background>
  </Body>
)

const ListOfItems = ({ items = [] }) => (
  <div>
    <h2>Here are your items:</h2>
    <div>
      {items.length &&
        items.map((item) => <div key={item.label}>{item.label}</div>)}
    </div>
  </div>
)
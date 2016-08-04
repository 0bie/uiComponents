// Import react core
import React from 'react';
import { render } from 'react-dom';

// Import global css
import g from './global.css';

// Import individual Components
// E.g `import ComponentName/ from './PATH/TO/Component.jsx';`
import Accordion from './Accordion';
import AccordionSection from './AccordionSection';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import CardItem from './CardItem';
import Cardlist from './Cardlist';
import CardlistItem from './CardlistItem';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Checkbox from './Checkbox';
import CommentBox from './CommentBox';
import Container from './Container';
import Form from './Form';
import FormGroup from './FormGroup';
import FormField from './FormField';
import Icon from './Icon';
import Image from './Image';
import Input from './Input';
import InputGroup from './InputGroup';
import List from './List';
import ListItem from './ListItem';
import MainNav from './MainNav';
import MainNavForm from './MainNavForm';
import Media from './Media';
import Menu from './Menu';
import Playlist from './Playlist';
import Radio from './Radio';
import PlaylistItem from './PlaylistItem';
import Sidebar from './Sidebar';
import SubscribeForm from './SubscribeForm';
import Spinner from './Spinner';
import TabSet from './TabSet';
import TabSection from './TabSection';
import TextField from './TextField';

// Define constants for each Component
// E.g `const componentName = document.getElementById('dom-node');`
const accordion = document.getElementById('accordion');
const button = document.getElementById('button');
const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const card_3 = document.getElementById('card3');
const cardlist = document.getElementById('cardlist');
const carousel = document.getElementById('carousel');
const checkbox = document.getElementById('checkbox');
const commentBox = document.getElementById('commentbox');
const container = document.getElementById('container');
const form = document.getElementById('form');
const icon = document.getElementById('icon');
const image = document.getElementById('image');
const input = document.getElementById('input');
const list = document.getElementById('list');
const sidebar = document.getElementById('sidebar');
const sortable = document.getElementById('sortable');
const spinner = document.getElementById('spinner');
const mainNav = document.getElementById('nav');
const media = document.getElementById('media');
const menu = document.getElementById('menu');
const playlist = document.getElementById('playlist');
const radio = document.getElementById('radio');
const subscribeform = document.getElementById('subscribeform');
const tabset = document.getElementById('tabset');


// Render each Component to the DOM
// E.g `render(<Component/>, dom-node);`

render(
  <MainNav>
    <MainNavForm options={[
      'accordion',
      'button',
      'card1',
      'card2',
      'card3',
      'cardlist',
      'carousel',
      'checkbox',
      'commentbox',
      'form',
      'image',
      'input',
      'list',
      'media',
      'menu',
      'playlist',
      'radio',
      'sidebar',
      'spinner',
      'subscribe',
      'tabset'
    ]}/>
  </MainNav>, nav
);

// render(<Container title="Test Title" description="This is where your description will go..."/>, container);

render(
  <Container title="Accordion"
    description={
      <ul>
        <li>A description of the accordion component.</li>
        <li>Its usage and supported props</li>
        <li>...</li>
      </ul>
    }>
      <Accordion>
        <AccordionSection title="Accordion Title 1">
          <Media>
            <Icon name="media1" title="media icon" desc="a media icon" width={150} height={150} />
          </Media>
        </AccordionSection>
        <AccordionSection title="Accordion Title 2">
          <Media>
            <Icon name="media1" title="media icon" desc="a media icon" width={150} height={150} />
          </Media>
        </AccordionSection>
        <AccordionSection title="Accordion Title 3">
          <Media>
            <Icon name="media1" title="media icon" desc="a media icon" width={150} height={150} />
          </Media>
        </AccordionSection>
        <AccordionSection title="Accordion Title 4">
          <Media>
            <Icon name="media1" title="media icon" desc="a media icon" width={150} height={150} />
          </Media>
        </AccordionSection>
        <AccordionSection title="Accordion Title 5">
          <Media>
            <Icon name="media1" title="media icon" desc="a media icon" width={150} height={150} />
          </Media>
        </AccordionSection>
      </Accordion>
  </Container>, accordion
);

render(
  <Container title="Card"
      description={
        <ul>
          <li>A description of the card component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <Card title="Card Title" hasFooter hasHover icons={[
          {name: 'twitter', color: '#fff', title: 'Twitter icon', desc: 'Share on Twitter'},
          {name: 'facebook', color: '#fff', title: 'Facebook icon', desc: 'Share on Facebook'},
          {name: 'instagram', color: '#fff', title: "Instagram icon", desc: 'Share on Instagram'}
        ]}>
          <CardItem>
            <Image src={require('../assets/black-rect.jpg')} alt="alternate text" />
          </CardItem>
        </Card>
  </Container>, card_1
);

render(
  <Container title="Card"
      description={
        <ul>
          <li>A description of the card component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <Card title="Card Title">
          <Media title="Media Title">
            <Icon name="media1" title="media icon" desc="a media icon" width={120} height={120} />
          </Media>
        </Card>
  </Container>, card_2
);

render(
  <Container title="card"
      description={
        <ul>
          <li>A description of the card component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <Card title="Card Title" hasFooter hasHover icons={[
            {name: 'fave3', color: '#fff', title:'Favorite icon', desc: 'A favorite button'},
            {name: 'share', color: '#fff', title: 'Share icon', desc: 'A share button'},
            {name: 'ellipsis', color: '#fff', title: 'More options', desc:'Options button' }
        ]} />
  </Container>, card_3
);

render(
  <Container title="cardlist"
      description={
        <ul>
          <li>A description of the cardlist component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <Cardlist>
          <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." >
            <Image src={require('../assets/yellow.jpg')} alt="alt text" />
          </CardlistItem>
          <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
            <Image src={require('../assets/blue.jpg')} alt="alt text" />
          </CardlistItem>
          <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
            <Image src={require('../assets/orange.jpg')} alt="alt text" />
          </CardlistItem>
          <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
            <Image src={require('../assets/black.jpg')} alt="alt text" />
          </CardlistItem>
        </Cardlist>
  </Container>, cardlist
);


render(
  <Container title="carousel"
      description={
        <ul>
          <li>A description of the carousel component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <Carousel>
          <CarouselItem>
            <Media title="Media Title 1">
              <Icon name="media1" title="media icon" desc="a media icon" color="teal" width={120} height={120} />
            </Media>
          </CarouselItem>
          <CarouselItem>
            <Media title="Media Title 2">
              <Icon name="media1" title="media icon" desc="a media icon" color="wheat" width={120} height={120} />
            </Media>
          </CarouselItem>
          <CarouselItem>
            <Media title="Media Title 3">
              <Icon name="media1" title="media icon" desc="a media icon" color="olive" width={120} height={120} />
            </Media>
          </CarouselItem>
          <CarouselItem>
            <Media title="Media Title 4">
              <Icon name="media1" title="media icon" desc="a media icon" color="indianred" width={120} height={120} />
            </Media>
          </CarouselItem>
        </Carousel>
  </Container>, carousel
);


render(
  <Container title="comment box"
      description={
        <ul>
          <li>A description of the comment box component.</li>
          <li>Its usage and supported props</li>
          <li>...</li>
        </ul>
      }>
        <CommentBox />
  </Container>, commentBox
);

render(
  <Container title="playlist"
  description={
    <ul>
      <li>A description of the playlist component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Playlist>
      <PlaylistItem title="Song Title 1" artist="Artist 1" duration="3:50" />
      <PlaylistItem title="Song Title 2" artist="Artist 2" duration="5:00" />
      <PlaylistItem title="Song Title 3" artist="Artist 3" duration="2:55" />
      <PlaylistItem title="Song Title 4" artist="Artist 4" duration="7:50" />
      <PlaylistItem title="Song Title 5" artist="Artist 5" duration="4:50" />
      <PlaylistItem title="Song Title 6" artist="Artist 6" duration="3:50" />
    </Playlist>
  </Container>, playlist
);

render(
  <Container title="spinner"
  description={
    <ul>
      <li>A description of the spinner component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Spinner />
  </Container>, spinner
);

render(
  <Container title="subscribe form"
  description={
    <ul>
      <li>A description of the subscribe form component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <SubscribeForm />
  </Container>, subscribeform
);

render(
  <Container title="Tab Set"
  description={
    <ul>
      <li>A description of the tab set component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <TabSet>
      <TabSection title="a">
        <Media title="Media Title A">
          <Icon name="media1" title="media icon" desc="a media icon" width={200} height={200} />
        </Media>
      </TabSection>
      <TabSection title="b">
        <Media title="Media Title B">
          <Icon name="media1" title="media icon" desc="a media icon" width={200} height={200} />
        </Media>
      </TabSection>
      <TabSection title="c">
        <Media title="Media Title C">
          <Icon name="media1" title="media icon" desc="a media icon" width={200} height={200} />
        </Media>
      </TabSection>
      <TabSection title="d">
        <Media title="Media Title D">
          <Icon name="media1" title="media icon" desc="a media icon" width={200} height={200} />
        </Media>
      </TabSection>
    </TabSet>
  </Container>, tabset
);

render(
  <Container title="icon"
  description={
    <ul>
      <li>A description of the icon component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Icon name='facebook' title='facebook Icon' desc='A facebook Icon' color="#3b5998" size="lg" />
  </Container>, icon
);

render(
  <Container title="media"
  description={
    <ul>
      <li>A description of the media component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Media>
      <Icon name="media1" title="media icon" desc="a media icon" width={120} height={120} />
    </Media>
  </Container>, media
);

render(
  <Container title="image"
  description={
    <ul>
      <li>A description of the image component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Image src={require('../assets/yellow.jpg')} size="xsm" alt="placeholder text"/>
    <Image src={require('../assets/orange.jpg')} size="sm" alt="placeholder text"/>
    <Image src={require('../assets/blue.jpg')} size="md" alt="placeholder text"/>
    <Image src={require('../assets/black.jpg')} size="lg"  alt="placeholder text"/>
    {/*<Image src={require('../assets/yellow.jpg')} size="xl" shape="circle" alt="placeholder text"/>*/}
    <br/><br/>
    <Image src={require('../assets/blue.jpg')} size="xsm" shape="circle" alt="placeholder text"/>
    <Image src={require('../assets/black.jpg')} size="sm" shape="circle" alt="placeholder text"/>
    <Image src={require('../assets/orange.jpg')} size="md" shape="circle" alt="placeholder text"/>
    <Image src={require('../assets/yellow.jpg')} size="lg" shape="circle" alt="placeholder text"/>
  </Container>, image
);

render(
  <Container title="list"
  description={
    <ul>
      <li>A description of the list component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <List items={[
      {title: 'Item 1', children: null },
      {title: 'Item 2', children: null },
      {title: 'Item 3', children: null },
      {title: 'Item 4', children: null },
      {title: 'Item 5', children: null }
    ]}/>
    <br />
    <br />
      <List hasHover isExpandable>
        <ListItem>
          <Media>
            <Image size="xsm" shape="circle" src={require('../assets/blue.jpg')} />
          </Media>
        </ListItem>
        <ListItem>
          <Media>
            <Image size="xsm" shape="circle" src={require('../assets/yellow.jpg')} />
          </Media>
        </ListItem>
        <ListItem>
          <Media>
            <Image size="xsm" shape="circle" src={require('../assets/black.jpg')} />
          </Media>
        </ListItem>
        <ListItem>
          <Media>
            <Image size="xsm" shape="circle" src={require('../assets/orange.jpg')} />
          </Media>
        </ListItem>
        <ListItem>
          <Media>
            <Image size="xsm" shape="circle" src={require('../assets/blue.jpg')} />
          </Media>
        </ListItem>
      </List>
  </Container>, list
);

render(
  <Container title="sidebar"
  description={
    <ul>
      <li>A description of the sidebar component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Sidebar position="right" items={[
      {item: '', children: <Button size="sm"><Icon name="avatar5" width={35} height={35} title="media1" /></Button>},
      {item: '', children: <Button size="sm"><Icon name="mail8" width={35} height={35} title="mail8" /></Button>},,
      {item: '', children:<Button size="sm"><Icon name="graph1" width={35} height={35} title="graph1" /></Button>},
      {item: '', children: <Button size="sm"><Icon name="media4" width={35} height={35} title="media4" /></Button>},
      {item: '', children: <Button size="sm"><Icon name="panel2" width={35} height={35} title="panel2" /></Button>},
    ]} />
  </Container>, sidebar
);

render(
  <Container title="button"
  description={
    <ul>
      <li>A description of the button component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Button size="sm">Button-sm</Button>
    <Button type="raised">Button-md</Button>
    <Button size="lg">Button-lg</Button>
    <Button isLoading size="lg" shape="circle">Button</Button>
    <Button size="sm" icon="search11">Button-sm</Button>
    <Button type="raised" icon="mail18" disabled>Button-md</Button>
    <Button size="sm" type="raised" icon="mail18" /><br/><br/>
    <Button size="xl" disabled>Button-xl</Button><br/><br/>
    <header>
      <h1 className={g.alignCenter}>Button Group</h1>
    </header>
    <ButtonGroup display="inline">
      <Button>Inline</Button>
      <Button>Inline</Button>
      <Button>Inline</Button>
    </ButtonGroup><br /><br />
    <ButtonGroup display="block">
      <Button>Block</Button>
      <Button>Block</Button>
      <Button>Block</Button>
    </ButtonGroup>
  </Container>, button
);

render(
  <Container title="input"
  description={
    <ul>
      <li>A description of the input component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Input size="sm" placeholder="Placeholder text" />
    <Input size="md" placeholder="Placeholder text" />
    <Input size="lg" placeholder="Placeholder text" />
    <Input size="xl" placeholder="Placeholder text" /><br/><br/>
    <header>
      <h1 className={g.alignCenter}>Input Group</h1>
    </header><br/><br/>
    <InputGroup display="inline">
      <Input size="md" placeholder="Placeholder text" />
      <Input size="md" placeholder="Placeholder text" />
      <Input size="md" placeholder="Placeholder text" />
    </InputGroup><br/><br/>
    <InputGroup display="block" disabled>
      <Input size="md" placeholder="Placeholder text" disabled />
      <Input size="md" placeholder="Placeholder text" disabled  />
      <Input size="md" placeholder="Placeholder text" disabled  />
    </InputGroup>
  </Container>, input
);

render(
  <Container title="form"
  description={
    <ul>
      <li>A description of the form component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Form>
      <FormField label="Label">
        <Input placeholder="Placeholder text" />
      </FormField>
      <FormField label="Label">
        <Input placeholder="Placeholder text" />
      </FormField>
      <FormGroup title="Title">
        <FormField label="Label" size="sm">
          <Input type="time" placeholder="00:00 HH"/>
        </FormField>
        <FormField label="Label" size="sm">
          <Input placeholder="V9R5H3" />
        </FormField>
        <FormField label="Label" hint="Hint text">
          <Input placeholder="Placeholder text" />
        </FormField>
        <FormField label="Label" hint="Hint text">
          <Input placeholder="Placeholder text" />
        </FormField>
        <FormField label="Label" hint="Hint text">
          <Input type="date" />
        </FormField>
        <FormField label="Label" hint="Hint text">
          <Input type="time" />
        </FormField>
        <FormField label="Label" hint="Hint text">
          <TextField placeholder="Placeholder text" />
        </FormField>
      </FormGroup>
    </Form>
  </Container>, form
);

render(
  <Container title="menu"
  description={
    <ul>
      <li>A description of the menu component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Menu header="Go to" items={[
        {title: null, children: <a>Item 1</a>},
        {title: null, children: <a>Item 2</a>},
        {title: null, children: <a>Item 3</a>},
        {title: null, children: <div styleName="divider" />},
        {title: null, children: <a>Item 4</a>},
        {title: null, children: <a>Item 5</a>}
      ]}/>
    <br /><br/>
    <Menu items={[
        {title: null, children: <div><Icon name="menu1" title="menu icon" desc="a menu icon" size="sm"/><span>MENU</span></div>},
        {title: null, children: <div styleName="divider" />},
        {title: null, children: <div><Icon name="mail19" title="media icon" size="sm"/><a>Inbox</a></div>},
        {title: null, children: <div><Icon name="shoppingCart6" title="shopping cart icon" size="sm"/><a>My Bag</a></div>},
        {title: null, children: <div><Icon name="fave4" title="favorite icon" size="sm"/><a>My Favorites</a></div>},
        {title: null, children: <div styleName="divider" />},
        {title: null, children: <div><Icon name="settings1" title="media icon" size="sm"/><a>Settings</a></div>},
        {title: null, children: <div><Icon name="graph1" title="media icon" size="sm"/><a>Statistics</a></div>},
        {title: null, children: <div styleName="divider" />},
        {title: null, children: <div><Icon name="calendar1" title="calendar icon" size="sm"/><a>My Calendar</a></div>}
      ]}/>
  </Container>, menu
);

render(
  <Container title="checkbox"
  description={
    <ul>
      <li>A description of the checkbox component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Checkbox size="sm" defaultChecked />
    <Checkbox size="md" defaultChecked />
    <Checkbox size="lg" defaultChecked />
    <Checkbox size="lg" circle defaultChecked />
  </Container>, checkbox
);

render(
  <Container title="radio"
  description={
    <ul>
      <li>A description of the radio component.</li>
      <li>Its usage and supported props</li>
      <li>...</li>
    </ul>
  }>
    <Radio size="sm" defaultChecked />
    <Radio size="md" defaultChecked />
    <Radio size="lg" defaultChecked />
  </Container>, radio
);
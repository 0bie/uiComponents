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
import CommentBox from './CommentBox';
import Container from './Container';
import Icon from './Icon';
import Image from './Image';
import List from './List';
import ListItem from './ListItem';
import MainNav from './MainNav';
import MainNavForm from './MainNavForm';
import Media from './Media';
import Playlist from './Playlist';
import PlaylistItem from './PlaylistItem';
import Sidebar from './Sidebar';
import SubscribeForm from './SubscribeForm';
import Spinner from './Spinner';
import TabSet from './TabSet';
import TabSection from './TabSection';

// Define constants for each Component
// E.g `const variableName = document.getElementById('dom-node');`
const accordion = document.getElementById('accordion');
const button = document.getElementById('button');
const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const card_3 = document.getElementById('card3');
const cardlist = document.getElementById('cardlist');
const carousel = document.getElementById('carousel');
const commentBox = document.getElementById('commentbox');
const container = document.getElementById('container');
const icon = document.getElementById('icon');
const image = document.getElementById('image');
const list = document.getElementById('list');
const sidebar = document.getElementById('sidebar');
const spinner = document.getElementById('spinner');
const mainNav = document.getElementById('nav');
const media = document.getElementById('media');
const playlist = document.getElementById('playlist');
const subscribeform = document.getElementById('subscribeform');
const tabset = document.getElementById('tabset');


// Render each Component to the DOM
// E.g `render(<Component/>, dom-node);`

render(
    <MainNav>
        <MainNavForm />
    </MainNav>, nav
);

// render(<Container title="Test Title" description="This is where your description will go..."/>, container);

render(
    <Container title="Accordion"
        description={<ul>
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
        description={<ul>
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
                    <Image src="assets/black-rect.jpg" alt="alternate text" />
                </CardItem>
            </Card>
    </Container>, card_1
);

render(
    <Container title="Card"
        description={<ul>
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
        description={<ul>
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
        description={<ul>
            <li>A description of the cardlist component.</li>
            <li>Its usage and supported props</li>
            <li>...</li>
            </ul>
        }>
            <Cardlist>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." >
                    <Image src="assets/yellow.jpg" alt="alt text" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
                    <Image src="assets/blue.jpg" alt="alt text" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
                    <Image src="assets/orange.jpg" alt="alt text" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details...">
                    <Image src="assets/black.jpg" alt="alt text" />
                </CardlistItem>
            </Cardlist>
    </Container>, cardlist
);


render(
    <Container title="carousel"
        description={<ul>
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
        description={<ul>
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
    description={<ul>
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
    description={<ul>
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
    description={<ul>
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
    description={<ul>
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
    description={<ul>
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
    description={<ul>
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
    description={<ul>
        <li>A description of the image component.</li>
        <li>Its usage and supported props</li>
        <li>...</li>
        </ul>
    }>
        <Image src="assets/yellow.jpg" size="xsm" alt="placeholder text"/>
        <Image src="assets/orange.jpg" size="sm" alt="placeholder text"/>
        <Image src="assets/blue.jpg" size="md" alt="placeholder text"/>
        <Image src="assets/black.jpg" size="lg"  alt="placeholder text"/>
        {/*<Image src="assets/yellow.jpg" size="xl" shape="circle" alt="placeholder text"/>*/}
        <br/><br/>
        <Image src="assets/blue.jpg" size="xsm" shape="circle" alt="placeholder text"/>
        <Image src="assets/black.jpg" size="sm" shape="circle" alt="placeholder text"/>
        <Image src="assets/orange.jpg" size="md" shape="circle" alt="placeholder text"/>
        <Image src="assets/yellow.jpg" size="lg" shape="circle" alt="placeholder text"/>
    </Container>, image
);

render(
    <Container title="list"
    description={<ul>
        <li>A description of the list component.</li>
        <li>Its usage and supported props</li>
        <li>...</li>
        </ul>
    }>
        <List hasHover>
            <ListItem>
                <Media>
                    <Image size="xsm" shape="circle" src="assets/blue.jpg" />
                </Media>
            </ListItem>
            <ListItem>
                <Media>
                    <Image size="xsm" shape="circle" src="assets/yellow.jpg" />
                </Media>
            </ListItem>
            <ListItem>
                <Media>
                    <Image size="xsm" shape="circle" src="assets/black.jpg" />
                </Media>
            </ListItem>
            <ListItem>
                <Media>
                    <Image size="xsm" shape="circle" src="assets/orange.jpg" />
                </Media>
            </ListItem>
            <ListItem>
                <Media>
                    <Image size="xsm" shape="circle" src="assets/blue.jpg" />
                </Media>
            </ListItem>
        </List>
    </Container>, list
);

render(
    <Container title="sidebar"
    description={<ul>
        <li>A description of the sidebar component.</li>
        <li>Its usage and supported props</li>
        <li>...</li>
        </ul>
    }>
            <Sidebar items={[
                {item: '', children: <Icon name="media1" size="md" title="media1" />},
                {item: '', children: <Icon name="mail8" size="md" title="mail8" />},,
                {item: '', children: <Icon name="graph1" size="md" title="graph1" />},
                {item: '', children: <Icon name="media4" size="md" title="media4" />},
                {item: '', children: <Icon name="panel2" size="md" title="panel2" />},
            ]} />
    </Container>, sidebar
);

render(
    <Container title="button"
    description={<ul>
        <li>A description of the button component.</li>
        <li>Its usage and supported props</li>
        <li>...</li>
        </ul>
    }>
            <Button size="sm">Button-sm</Button>
            <Button size="md" type="raised">Button-md</Button>
            <Button size="lg">Button-lg</Button>
            <Button isLoading size="lg" shape="circle">Button</Button>
            <Button size="sm" icon="search11">Button-sm</Button>
            <Button size="md" type="raised" icon="mail18" disabled>Button-md</Button><br/><br/>
            <Button size="xl" disabled>Button-xl</Button><br/><br/>
                <header>
                    <h1 className={g.alignCenter}>Button Group</h1>
                </header>
            <ButtonGroup display="inline">
                <Button size="md">Inline</Button>
                <Button size="md">Inline</Button>
                <Button size="md">Inline</Button>
            </ButtonGroup><br /><br />
            <ButtonGroup display="block">
                <Button size="md">Block</Button>
                <Button size="md">Block</Button>
                <Button size="md">Block</Button>
            </ButtonGroup>
    </Container>, button
);
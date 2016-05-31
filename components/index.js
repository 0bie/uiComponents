// Import react core
import React from 'react';
import { render } from 'react-dom';

// Import global css
import './global.css';

// Import individual Components
// E.g `import ComponentName/ from './PATH/TO/Component.jsx';`
import Accordion from './Accordion';
import AccordionSection from './AccordionSection';
import Card from './Card';
import CardItem from './CardItem';
import Cardlist from './Cardlist';
import CardlistItem from './CardlistItem';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import CommentBox from './CommentBox';
import Container from './Container';
import Icon from './Icon';
import MainNav from './MainNav';
import MainNavForm from './MainNavForm';
import Media from './Media';
import Playlist from './Playlist';
import PlaylistItem from './PlaylistItem';
import SubscribeForm from './SubscribeForm';
import Spinner from './Spinner';
import TabSet from './TabSet';
import TabSection from './TabSection';

// Define constants for each Component
// E.g `const variableName = document.getElementById('dom-node');`
const accordion = document.getElementById('accordion');
const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const card_3 = document.getElementById('card3');
const cardlist = document.getElementById('cardlist');
const carousel = document.getElementById('carousel');
const commentBox = document.getElementById('commentbox');
const container = document.getElementById('container');
const icon = document.getElementById('icon');
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
                        <Icon name="media1" title="media icon" desc="a media icon"/>
                    </Media>
                </AccordionSection>
                <AccordionSection title="Accordion Title 2">
                    <Media>
                        <Icon name="media1" title="media icon" desc="a media icon"/>
                    </Media>
                </AccordionSection>
                <AccordionSection title="Accordion Title 3">
                    <Media>
                        <Icon name="media1" title="media icon" desc="a media icon"/>
                    </Media>
                </AccordionSection>
                <AccordionSection title="Accordion Title 4">
                    <Media>
                        <Icon name="media1" title="media icon" desc="a media icon"/>
                    </Media>
                </AccordionSection>
                <AccordionSection title="Accordion Title 5">
                    <Media>
                        <Icon name="media1" title="media icon" desc="a media icon"/>
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
            <Card title="Card Title" footer>
                <CardItem/>
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
                    <Icon name="media1" title="media icon" desc="a media icon"/>
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
            <Card title="Card Title" />
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
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="black.jpg">
                    <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" size="sm" color="white"/>
                    <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm"/>
                    <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="blue.jpg">
                    <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" color="white" size="sm"/>
                    <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm"/>
                    <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="orange.jpg">
                    <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" color="white" size="sm" />
                    <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm" />
                    <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
                </CardlistItem>
                <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="yellow.jpg">
                    <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" color="white" size="sm" />
                    <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm" />
                    <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
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
                    <Media>
                    <Icon name="media1" title="media icon" desc="a media icon" color="teal" />
                    </Media>
                </CarouselItem>
                <CarouselItem>
                    <Media title="Media Title 2">
                    <Icon name="media1" title="media icon" desc="a media icon" color="peach" />
                    </Media>
                </CarouselItem>
                <CarouselItem>
                    <Media title="Media Title 3">
                    <Icon name="media1" title="media icon" desc="a media icon" color="olive" />
                    </Media>
                </CarouselItem>
                <CarouselItem>
                    <Media title="Media Title 4">
                    <Icon name="media1" title="media icon" desc="a media icon" color="indianred" />
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
            <CommentBox/>
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
            <PlaylistItem title="Song Title 1" artist="Artist 1" duration="3:50"/>
            <PlaylistItem title="Song Title 2" artist="Artist 2" duration="5:00"/>
            <PlaylistItem title="Song Title 3" artist="Artist 3" duration="2:55"/>
            <PlaylistItem title="Song Title 4" artist="Artist 4" duration="7:50"/>
            <PlaylistItem title="Song Title 5" artist="Artist 5" duration="4:50"/>
            <PlaylistItem title="Song Title 6" artist="Artist 6" duration="3:50"/>
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
        <Spinner size="md" />
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
                <Media title="Media Title 1">
                    <Icon name="media1" title="media icon" desc="a media icon"/>
                </Media>
            </TabSection>
            <TabSection title="b">
                <Media title="Media Title 2">
                    <Icon name="media1" title="media icon" desc="a media icon"/>
                </Media>
            </TabSection>
            <TabSection title="c">
                <Media title="Media Title 3">
                    <Icon name="media1" title="media icon" desc="a media icon"/>
                </Media>
            </TabSection>
            <TabSection title="d">
                <Media title="Media Title 4">
                    <Icon name="media1" title="media icon" desc="a media icon"/>
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
            <Icon name="media1" title="media icon" desc="a media icon" size="md" />
        </Media>
    </Container>, media
);
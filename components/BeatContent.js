import {List, Button, Icon} from 'semantic-ui-react';
import BeatList from './BeatList';
import MusicPicker from './MusicPicker';

const BeatContent = (props) => (

    <List divided relaxed>

        {BeatList.map( (song) => {
            return (<List.Item style={{padding: "2vh 0"}}>
                        <List.Content floated="left" verticalAlign="middle" style={{paddingTop: "1vh"}}>
                            <MusicPicker playSong={props.playSong} song={song}>
                                <Icon name="play circle" size="big" color="black" />
                            </MusicPicker>
                        </List.Content>
                        <List.Content floated="left" style={{fontSize: "1.25em", paddingTop: "1.5vh"}}>
                            <strong>{song.title}</strong>
                        </List.Content>
                        <List.Content floated="right" verticalAlign="middle">
                            <Button  onClick={() => {props.addToCart(song)}} color="black">
                                <Icon callName="addToCart"name="cart" size="medium" />
                                Add
                            </Button>
                        </List.Content>
                    </List.Item>)
        })}

    </List>
)




export default BeatContent;
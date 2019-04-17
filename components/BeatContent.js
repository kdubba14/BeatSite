import {List, Button, Icon} from 'semantic-ui-react';
import BeatList from './BeatList';
import MusicPicker from './MusicPicker';

const BeatContent = (props) => (

    <List divided relaxed>

        {BeatList.map( (song) => {
            return (<div className="beats-card-item">
                        
                        <List.Content style={{paddingTop: "1vh"}}>
                            <MusicPicker playSong={props.playSong} song={song}>
                                <Icon name="play circle" size="big" color="black" />
                            </MusicPicker>
                        </List.Content>

                        <List.Content style={{fontSize: "1.25em", paddingTop: "1.5vh"}}>
                            <strong style={{paddingLeft: "2.5%"}}>{song.title}</strong>
                        </List.Content>

                        <List.Content verticalAlign="middle">
                            <Button  onClick={() => {props.addToCartPopup(song)}} color="black" size="small" style={{margin: "0"}}>
                                <Icon callName="addToCart"name="cart" size="medium" />
                                Add
                            </Button>
                        </List.Content>

                    </div>)
        })}

    </List>
)




export default BeatContent;
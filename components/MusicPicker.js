const MusicPicker = (props) => (
    <a onClick={() => props.playSong(props.song)}>
        {props.children}
    </a>
)

export default MusicPicker;
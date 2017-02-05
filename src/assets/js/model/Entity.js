export default class Entity {
    data = {};
    url = this.props.url;

    constructor(props) {
        super(props);
        this.fetch();
    }

    fetch() {
        fetch(this.url)
            .then(blob => blob.json())
            .then(data => this.data = data)
    }
}
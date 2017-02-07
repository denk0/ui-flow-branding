import React from 'react';
import Modal from 'react-modal';

class CreateTaskModal extends React.Component {

    constructor () {
        super();
        this.state = {
            showModal: false
        };
    }

    handleCloseModal () {
        this.setState({ showModal: true });
    }

    render() {
        this.setState({ showModal: this.props.isOpen });

        return (
            <Modal isOpen={this.state.showModal}>
                <div id="firstModal" class="reveal-modal" data-reveal
                     aria-labelledby="firstModalTitle" aria-hidden="true" role="dialog">
                    <h2 id="firstModalTitle">This is a modal.</h2>
                    <p>Reveal makes these very easy to summon and dismiss. The close button is
                        simply an anchor with a unicode character icon and a class of <code>close-reveal-modal</code>.
                        Clicking anywhere outside the modal will also dismiss it.</p>
                    <p>Finally, if your modal summons another Reveal modal, the plugin will handle
                        that for you gracefully.</p>
                    <p><a href="#" data-reveal-id="secondModal" class="secondary button">Second
                        Modal...</a></p>
                    <a class="close-reveal-modal" onClick={::this.handleCloseModal} aria-label="Close">&#215;</a>
                </div>
            </Modal>
        );
    }
}
export default CreateTaskModal;
import React from 'react';
import Footer from "./Footer";
import Top from "./Top";
import Album from "./Album";
import CreateModal from "./CreateModal";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import {createFilm, deleteFilm, getFilms, getImage, updateFilm, uploadImage} from "../config/fetching";
import ErrorModal from "./ErrorModal";


class App extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            loaded: false,
            showModal: false,
        };
    }

    turnOffModal() {
        this.setState({showModal: false});
    }

    componentDidMount() {
        this.handleGet();
    }

    async handleGet() {
        let films;
        await getFilms()
            .then(res => res.json())
            .then(json => films = json)
            .catch(e => this.handleError(e, 'Failed to get list of films'));
        for (let i = 0; i < films.length; i++) {
            let image;
            await fetch(getImage(films[i].imageId))
                .then(res => res.blob())
                .then(img => image = URL.createObjectURL(img))
                .catch(e => this.handleError(e, 'Failed to download image'));
            films[i].image = image;
        }
       this.setState({
            films: films,
            loaded: true,
        });
    }

    handleCreate(film, file) {
        uploadImage(file)
            .then(res => res.json())
            .then(json => {
                film.imageId = json.imageId;
                createFilm(film)
                    .then(() => {
                        this.handleGet();
                        this.turnOffModal();
                    })
                    .catch(e => this.handleError(e, 'Failed to create film'));
            })
            .catch(e => this.handleError(e, 'Failed to upload image'));
    }

    handleUpdate(id, film, file) {
        if (file === null) {
            updateFilm(id, film)
                .then(() => {
                    this.handleGet();
                    this.turnOffModal();
                })
                .catch(e => this.handleError(e, 'Failed to update film'));
        } else {
            uploadImage(file)
                .then(res => res.json())
                .then(json => {
                    film.imageId = json.imageId;
                    updateFilm(id, film)
                        .then(() => {
                            this.handleGet();
                            this.turnOffModal();
                        })
                        .catch(e => this.handleError(e, 'Failed to update film'));
                })
                .catch(e => this.handleError(e, 'Failed to upload image'));
        }
    }

    handleDelete(film) {
        deleteFilm(film.id)
            .then(() => {
                this.handleGet();
                this.turnOffModal();
            })
            .catch(e => this.handleError(e, 'Failed to delete film'));
    }

    handleModalClick(film, method) {
        switch (method) {
            case 'create':
                this.modal = <CreateModal
                    onAccept={ (video, file) => this.handleCreate(video, file) }
                    onDecline={ () => this.turnOffModal() }/>;
                this.setState({ showModal: true });
                break;
            case 'view':
                this.modal = <ViewModal
                    film={film}
                    onDecline={ () => this.turnOffModal() }/>;
                this.setState({ showModal: true });
                break;
            case 'edit':
                this.modal = <EditModal
                    film={film}
                    onAccept={ (video, file) => this.handleUpdate(film.id, video, file) }
                    onDecline={ () => this.turnOffModal() }/>;
                this.setState({ showModal: true });
                break;
            case 'delete':
                this.modal = <DeleteModal
                    onAccept={ () => this.handleDelete(film) }
                    onDecline={ () => this.turnOffModal() }/>;
                this.setState({ showModal: true });
                break;
            default:
                console.warn('Invalid method ' + method);
        }
    }

    handleError(e, msg) {
        this.modal = <ErrorModal
            onDecline={ () => this.turnOffModal() }
            body={ e.name + ': ' + e.message + ': ' + msg} />;
        this.setState({ showModal: true });
    }

    render() {
        const mainStyle = {
            minHeight: 'calc(100vh - 112px)',
            background: 'linear-gradient(90deg, rgba(28,64,107,0.5) 0%, rgba(66,93,157,0.3) 50%, rgba(28,64,107,0.5) 100%)',
        };
        return (
            <React.Fragment>
                <Top onClick={ (film, method) => this.handleModalClick(film, method)} />
                    <main style={mainStyle}>

                        { this.state.showModal ? this.modal : '' }

                      <Album
                          films={this.state.films}
                          onClick={ (film, method) => this.handleModalClick(film, method) } />
                    </main>
                    <Footer />
            </React.Fragment>
        );
    }
}

export default App;

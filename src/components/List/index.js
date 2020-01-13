import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.addLike = this.addLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.carregaIconeLike = this.carregaIconeLike.bind(this);
    }

    mostraLikes(likers) {
        if(likers <= 0) {
            return;
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : "curtida"}</Text>
        );
    }

    like() {
        let feed = this.state.feed;

        if(feed.likeada === true) {
            this.removeLike(feed);
        } else {
            this.addLike(feed);
        }
    }

    addLike(feed) {
        this.setState({
            feed: {
                ...feed,
                likeada: true,
                likers: feed.likers + 1
            }
        })
    }

    removeLike(feed) {
        this.setState({
            feed: {
                ...feed,
                likeada: false,
                likers: feed.likers - 1
            }
        })
    }


    carregaIconeLike(likeada) {
        return likeada? require( '../../assets/likeada.png') : require( '../../assets/like.png');
    }

    render() {
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image
                        source={{uri: this.state.feed.imgPerfil}}
                        style={styles.fotoPerfil} />

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome} </Text>
                </View>

                <Image
                    resizeMode='cover'
                    style={styles.fotoPublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View
                    style={styles.areaBtn}
                >
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            style={styles.iconeLike}
                            source={this.carregaIconeLike(this.state.feed.likeada)}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                            style={styles.iconeLike}
                            source={require( '../../assets/send.png')}/>
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>

                    <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000'
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 9
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    iconeLike :{
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5     
    }, 
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nomeRodape: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        paddingLeft: 5
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    likes: {
        marginLeft: 5,
        fontWeight: 'bold'
    }

});
export default List;
import React from 'react';                   
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { albums } from '../../content/albums.json';
import devices from '../styles/devices';

import SEO from '../components/seo';
import AlbumsContainer from '../components/AlbumsContainer';

const Container = styled.div`
    margin-top: 225px;
`;

const Discography = ({ data, location }) => {
    let seededAlbums = albums.map(album => {
        return {
            ...album,
            albumImg: data[album.anchor].childImageSharp.fluid,
        }
    });

    return (
        <>
            <SEO title='Dr. Light Music | Discography' />
            <Container>
                <AlbumsContainer
                    albums={seededAlbums}
                    hash={location.hash}/>
            </Container>
        </>
    )
}

export default Discography;

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const pageQuery = graphql`
    query {
        phobia: file(relativePath: {eq: "album_phobia.jpg"}) {
            ...fluidImage
        }
        the_light_hits: file(relativePath: {eq: "album_the_light_hits.png"}) {
            ...fluidImage
        }
        triangle_of_stars: file(relativePath: {eq: "album_triangle.jpg"}) {
            ...fluidImage
        }
    }
`;
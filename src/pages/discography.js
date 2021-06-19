import React from 'react';                   
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { albums } from '../../content/albums.json';
import devices from '../styles/devices';

import SEO from '../components/seo';
import AlbumsContainer from '../components/AlbumsContainer';

const TvSupports = styled.div`
    height: 288px;
    margin: auto;
    background: url("/tv.png") 50% no-repeat;

    @media ${devices.mobileL} {
        height: 100px;
        width: 425px;
        background-position: 85% 80%;
    }
`;

const Discography = ({ data }) => {
    let seededAlbums = albums.map(album => {
        return {
            ...album,
            albumImg: data[album.anchor].childImageSharp.fluid,
        }
    });

    return (
        <>
            <SEO title='Dr. Light Music | Discography' />
            <>
                <TvSupports />
                <AlbumsContainer 
                    albums={seededAlbums}/>
            </>
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

//TODO: Generate query dynamically from album json data
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
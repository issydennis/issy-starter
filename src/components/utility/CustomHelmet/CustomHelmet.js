import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const CustomHelmet = (props) => (

    <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/* The theme colour is the colour of the chrome bar on mobile. */}
        <meta name="theme-color" content='#fff' />

        <title>{props.title}</title>
        <meta name="description" content={props.description} />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />

        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

)

CustomHelmet.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.isRequired,
  }

export default CustomHelmet;
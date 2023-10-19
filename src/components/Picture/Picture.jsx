import "./Picture.scss"

/* eslint-disable react/prop-types */
export default function Picture({ src_mobile, src_desktop, alt }) {
    return (
        <picture>
            <source srcSet={src_mobile} media="(max-width: 768px)" />
            <source srcSet={src_desktop} />
            <img src={src_desktop} alt="" loading="lazy" />
        </picture>
    );
}
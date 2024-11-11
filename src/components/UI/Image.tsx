interface ImageProps {
  src: string;
  alt: string;
}

function Image(props: ImageProps) {
  return <img {...props} />;
}

export default Image;

import Icon from './Icon';

const Stars = ({ rating }) => {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return (
    <span style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {[...Array(full)].map((_, i)  => <Icon key={`f${i}`} name="star" size={13} color="#D4A017" />)}
      {[...Array(empty)].map((_, i) => <Icon key={`e${i}`} name="star" size={13} color="#1e293b" />)}
    </span>
  );
};

export default Stars;

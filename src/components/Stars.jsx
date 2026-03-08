import Icon from './Icon';

const Stars = ({ rating }) => (
  <span style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Icon key={i} name="star" size={12} color={i <= Math.round(rating) ? '#D4A017' : '#334155'} />
    ))}
  </span>
);

export default Stars;

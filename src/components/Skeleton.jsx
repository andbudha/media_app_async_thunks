export const Skeleton = ({ times }) => {
  const bars = [];
  for (let i = 0; i < times; i++) {
    bars.push(<div key={i} />);
  }
  return bars;
};

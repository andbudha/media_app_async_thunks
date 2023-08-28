import classNames from 'classnames';

export const Skeleton = ({ times, className }) => {
  const outterClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    //'rounded',
    'mb-2.5',
    className
  );

  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  const bars = [];
  for (let i = 0; i < times; i++) {
    bars.push(
      <div key={i} className={outterClassNames}>
        <div className={innerClassNames} />
      </div>
    );
  }
  return bars;
};

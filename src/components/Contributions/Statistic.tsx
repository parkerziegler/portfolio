import * as React from 'react';

interface Props {
  number: number;
  description: string;
}

const Statistic: React.FC<Props> = ({ number, description }) => {
  return (
    <div className="col-span-6 lg:col-span-3 flex stack-sm-h items-center">
      <div>
        <h3 className="text-6xl font-mono text-primary">{number}</h3>
        <div className="bg-radial h-8 across bg-radial--primary" />
      </div>
      <p className="text-4xl">
        {number > 1 ? description.concat('s') : description}
      </p>
    </div>
  );
};

export default Statistic;

import './Indicator.scss';

interface IndicatorProps {
  strength: number;
}

function Indicator({ strength }: IndicatorProps) {
  return (
    <div className="indicator">
      {Array.from({ length: 4 }).map((_, index) => {
        const isActive = strength > index;
        return (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={`indicator-${index}`}
            data-testid={`indicator_box${isActive && '-active'}`}
            className={`indicator_box ${isActive && 'active'}`}
          />
        );
      })}
    </div>
  );
}

export default Indicator;

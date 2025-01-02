import { Text } from '@fluentui/react-components';

// create road rage text  interface  (color is optional
// size is only from 100 - 1000
interface textProp {
    color?: string;
    titleText: string;
    textSize?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
    min?: `${number}rem`;
    middle?: `${number}vw`;
    max?: `${number}rem`;
    style?: React.CSSProperties;
}

// create Title component -> inherit TitleProps
/**
 * Title component that displays a styled heading text.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.color='#FFFFFF'] - The color of the title text.
 * @param {string} props.titleText - The text to be displayed as the title.
 * @param {100|200|300|400|500|600|700|800|900|1000} [props.textSize=800] - Numeric size variant for the title text.
 * @param {`${number}rem`} [props.min='3.5rem'] - The minimum text size.
 * @param {`${number}vw`} [props.middle='8vw'] - The scaling value based on viewport width.
 * @param {`${number}rem`} [props.max='5.5rem'] - The maximum text size.
 *
 * @returns {JSX.Element} The rendered Title component.
 *
 * @example
 * <Title color="#FF5733" titleText="Welcome to the App!" textSize={500} />
 *
 * @remarks
 * The `clamp` function in the `fontSize` style is used to set a responsive value between a min and max size.
 */
const roadRageText = ({ color = '#FFFFFF', titleText, textSize=800, min = '3.5rem', middle = '8vw', max = '5.5rem' }: textProp) => {
  return (
    <div>
    <Text 
        size={textSize}
        weight="bold"
        style={{ 
            color,
            fontSize: `clamp(${min}, ${middle}, ${max})`,
            fontFamily: '"Road Rage", serif'
        }}
    >
        {titleText}
    </Text>
    </div>
  );
};

export default roadRageText;
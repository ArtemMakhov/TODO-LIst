import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title, StatList,StatItem,Label, Percentage} from './Statistics.styled';
import { getRandomHexColor } from './RandomColors';

export const Statistics = ({ title = null, stats }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="20%"
            m="auto"
            bg="background"
            border="normal"
            borderColor="black">
        {title && <Title>{title}</Title>}
        <StatList>
        {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} style={{backgroundColor:getRandomHexColor()}}>
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
         </StatItem>
))}
        </StatList>
    </Box>
    )
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })

    )
};
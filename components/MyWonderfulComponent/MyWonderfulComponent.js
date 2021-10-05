import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const Title = styled(Typography)({
  color: '#ff0000',
});

function MyWonderfulComponent({ id, options, count, children, data }) {
  const [sum, setSum] = useState(count);

  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
      setSum((prevSum) => prevSum + 1);
    }
  }, [id, options]);

  return (
    <>
      <Title variant="h1">Hello World!</Title>
      <Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid>{sum}</Grid>
        <Grid>{data}</Grid>
      </Grid>
    </>
  );
}

MyWonderfulComponent.propTypes = {
  id: PropTypes.number.isRequired,
  options: PropTypes.shape({
    params: PropTypes.shape({
      fields: PropTypes.shape({ isDynamic: PropTypes.bool }),
    }),
  }),
  count: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MyWonderfulComponent;

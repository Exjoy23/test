import PropTypes from 'prop-types';
import MyWonderfulComponent from '../components/MyWonderfulComponent/MyWonderfulComponent';

function Page({ id, options, count, color, data }) {
  console.log(data);
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
    >
      I&#39;m text from a component
    </MyWonderfulComponent>
  );
}

export async function getStaticProps() {
  const id = 1;
  const options = {
    params: {
      fields: {
        isDynamic: true,
      },
    },
  };
  const count = 1;
  const color = '#ff0000';
  const data = 'Hello from SSR';

  return {
    props: {
      id,
      options,
      count,
      color,
      data,
    },
  };
}

Page.propTypes = {
  id: PropTypes.number.isRequired,
  options: PropTypes.shape({
    params: PropTypes.shape({
      fields: PropTypes.shape({ isDynamic: PropTypes.bool }),
    }),
  }),
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Page;

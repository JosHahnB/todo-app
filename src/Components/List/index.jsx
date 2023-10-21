import { useEffect } from 'react';

import { GlobalContext } from '../../App';
import { useContext, useMemo, useState } from 'react';
import { Box, Pagination, Button } from '@mui/material';

const TodoList = ({ list, toggleComplete, incomplete }) => {
  // console.log(list);
  const { hideCompleted, displayCount } = useContext(GlobalContext);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  //During initial rendering, useMemo(compute, dependencies) invokes compute , memoizes the calculation result, and returns it to the component. If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute , but returns the memoized value.
  const listToUse = useMemo(() => {
    console.log(hideCompleted, incomplete, list);
    if (hideCompleted) return incomplete;
    else return list;
  }, [hideCompleted, incomplete, list]);

  useEffect(() => {
    // figure out haw many pages wen eed by dividing the list to use by the displayCount
    const totalPages = Math.floor(listToUse.length / displayCount);
    const addOne = listToUse.length % displayCount;
    console.log(totalPages, addOne);
    setCount(addOne ? totalPages + 1 : totalPages);
  }, [displayCount, listToUse]);

  const handlePageChange = (e, ePage) => {
    setPage(ePage);
  };

  const startIndex = useMemo(() => {
    return (page - 1) * displayCount;
  }, [displayCount, page]);

  const endIndex = useMemo(() => {
    return (page - 1) * displayCount + displayCount;
  }, [page, displayCount]);

  return (
    <Box
      sx={{
        width: '500px',
        margin: 'auto',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      {listToUse.slice(startIndex, endIndex).map((item) => (
        <div key={item.id}>
          <Box sx={{ fontSize: '16px', fontWeight: 'bold' }}>{item.text}</Box>
          <Box sx={{ fontSize: '14px', color: '#666' }}>
            Assigned to: {item.assignee}
          </Box>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            <Button>{item.complete ? 'Completed' : 'Incomplete'}</Button>
          </div>
          <hr />
        </div>
      ))}
      <Pagination
        count={count}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default TodoList;

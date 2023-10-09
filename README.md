# useCallback-hooks

 <h3>useCallback hook</h3>
      <p>
        <br /> Purpose:
        <br />
        useCallback is a React hook used for optimizing performance by memoizing
        (caching) callback functions. It ensures that the callback function is
        only recreated when its dependencies change, preventing unnecessary
        re-renders of components.
        <br /> Usage:
        <br /> It is used to wrap callback functions and specify a dependency
        array that determines when the function should be recreated.
        <br />
        The function will be recreated when any of the dependencies in the array
        change.
        <br />
        If the dependency array is empty ([]), the function is only created once
        during component initialization. When to Use useCallback:
        <br />
        1. When you pass callback functions as props to child components.
        <br /> 2. When you want to prevent unnecessary re-renders caused by
        functions created in the render cycle.
        <br /> 3. When you want to maintain a stable reference to a callback
        function across renders.
      </p>
      <hr />
      <h3>React.memo</h3>
      <p>
        Purpose:
        <br /> React.memo is a higher-order component (HOC) or a function that
        can be used to memoize functional components. It prevents a functional
        component from re-rendering unless its props have changed.
        <br />
        Usage: <br /> Wrap a functional component with React.memo to memoize it.
        <br />
        When to Use React.memo:
        <br />
        When you have functional components that receive props and you want to
        prevent them from re-rendering when their props haven't changed.
        <br />
        When you use useCallback to memoize callback functions and want to
        ensure that child components using those callbacks don't re-render
        unnecessarily.
      </p>
      <hr />
      <h2>Using useCallback with React.memo:</h2>
      <p>
        <ul>
          <li>
            When you use useCallback to memoize a callback function in a parent
            component, it can be beneficial to also use React.memo with child
            components that receive and use these callbacks.
          </li>
          <li>
            This combination ensures that the child components won't re-render
            unless their props (including the callback functions) change, even
            if the parent component re-renders due to other state or prop
            changes.
          </li>
        </ul>
      </p>
      <hr />
      <h3>In summary</h3>
      <p>
        while <b>useCallback</b> is used to optimize the creation of callback
        functions in React components, React.memo is used to optimize the
        rendering of functional components by preventing unnecessary re-renders.
        Using them together can lead to improved performance and a more
        efficient rendering process in your React application.
      </p>

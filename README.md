# useCallback-hooks

<h1>useCallback:</h1>
<ul>
 <li>
  
It is used to memoize callback functions in a parent component.
 </li>
 <li>
  
Helps ensure that the callback function is only recreated when its dependencies (specified in the dependency array) change.
 </li>
 <li>
  
Optimizes the performance of the parent component by preventing unnecessary re-creation of callback functions.
 </li>
</ul>

<h1>React.memo:</h1>

<ul>
 <li>
  
It is used to memoize functional components.
 </li>
 <li>
  
Prevents a functional component from re-rendering unless its props have changed.
 </li>
 <li>
  
Optimizes the performance of child components by preventing unnecessary re-renders when their props have not changed.
 </li>
</ul>

<hr/>
<p>
 
Here's how the useCallback hook behaves based on the dependency array:
</p>

<h2>
 1. Empty Dependency Array ([]):
</h2>
<p>
 
When you provide an empty dependency array, the memoized callback function is created once during the initial render and remains the same for the entire component's lifecycle.
</p>
<p>
This is useful when you want a stable callback function that doesn't depend on any variables or props.
</p>
 Example:
<code>
 const memoizedCallback = useCallback(() => {
  // This function is created once and doesn't depend on any variables or props.
}, []);
</code>

<h2>2. Dependency Array with Variables:</h2>

<p>When you provide a dependency array with one or more variables or props, the memoized callback function will be recreated whenever any of those dependencies change between renders.</p>
<p>The memoized function will incorporate the latest values of the specified dependencies each time it is recreated.</p>
Example:
<code>
 const memoizedCallback = useCallback(() => {
  // This function depends on `dependency1` and `dependency2`.
}, [dependency1, dependency2]);

</code>

<h2>3. No Dependency Array (Omitting the Array):</h2>

<p>When you omit the dependency array altogether, the memoized callback function will be recreated on every render, including the initial render.</p>
<p>This can be useful when you want the callback function to have access to the latest values of variables or props without explicitly specifying them as dependencies.</p>
Example:
<code>
 const memoizedCallback = useCallback(() => {
  // This function depends on variables or props that may change.
});

</code>
<hr/>
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

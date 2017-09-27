```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-0'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Default example (Local)'
        localTimezone={true}
        onChange={(newValue) => setState({value: newValue})}
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-1'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Default example (GMT)'
        localTimezone={false}
        onChange={(newValue) => setState({value: newValue})}
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-2'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Required example (Local)'
        localTimezone={true}
        onChange={(newValue) => setState({value: newValue})}
        required
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-3'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Required example with errors (GMT)'
        error={state.value === 'invalid' ? 'This must be a valid date and time!' : ''}
        localTimezone={false}
        onChange={(newValue) => setState({value: newValue})}
        required
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-4'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Military Time example (Local)'
        error={state.value === 'invalid' ? 'This must be a valid date and time!' : ''}
        localTimezone={true}
        onChange={(newValue) => setState({value: newValue})}
        militaryTime
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-5'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Military Time example with Seconds (GMT)'
        error={state.value === 'invalid' ? 'This must be a valid date and time!' : ''}
        localTimezone={false}
        onChange={(newValue) => setState({value: newValue})}
        militaryTime showSeconds
    />
</div>
```

```jsx
const initialState = {value: 'Sep 20, 2010 05:00:00 GMT'};

<div>
    <div>Current Value: {state.value}</div>
    <DateTimeField
        name='date-picker-disabled'
        initialValue={'Sep 20, 2010 05:00:00 GMT'}
        label='Disabled example (GMT)'
        error={state.value === 'invalid' ? 'This must be a valid date and time!' : ''}
        localTimezone={false}
        onChange={(newValue) => setState({value: newValue})}
        disabled
    />
</div>
```
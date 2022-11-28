# Measurement
Javascript Classes for storing, and converting units of measurement

## Installation

    npm install @benehmke/measurement

```javascript
import {Length} from 'measurement';

const boxFront = new Length('9 ft');
const boxSide = new Length(4, 'ft');
const boxHeight = new Length({value: 4, unit: 'in'})
```

## Usage

### `to(units)`

```javascript
const boxFront = new Length('9 ft');
console.log(boxFront.to('in'));
// >> 108 in
```

### `add(measurement)`

```javascript
const length1 = new Length('9 ft');
const length2 = new Length('3 m');
console.log(length1.add(length2));
// >> 18.84 ft
```

### `subtract(measurement)`

```javascript
const length1 = new Length('18 ft');
const length2 = new Length('3 m');
console.log(length1.subtract(length2));
// >> 8.016 ft
```

### `by(measurement)`

```javascript
const length1 = new Length('9 ft');
const length2 = new Length('3 m');
console.log(length1.by(length2));
// >> 88.56 sqft
```

### `valueOf`

```javascript
const distanceA = new Length('9 ft');
const distanceB = new Length('5 m');
console.log(distanceA < distanceB);
// >> true
```



## Units
#### Length
|Name|Label|
| --- | --- |
|Millimeter|`mm`|
|Centimeter|`cm`|
|Meter|`m`|
|Kilometer|`km`|
|Inch|`in`|
|Foot|`ft`|
|Yard|`yd`|
|Mile|`mi`|

#### Area
|Name|Label|
| --- | --- |
|Square Meter|`sqm`|
|Square Inch|`sqin`|
|Square Foot|`sqft`|
|Tsubo|`tsubo`|

## Development
### TODO
- [x] Add/Subtract Method
- [x] Length.toArea
- [ ] Custom Unit rename (ex ft2 for sqft)
- [ ] Volume
- [ ] Weight

### Build
    npm run build
### Test
    npm run test
### Release
    npm publish
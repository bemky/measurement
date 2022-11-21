# Measurement
Javascript Classes for storing, and converting units of measurement

## Installation

    npm install bemky/measurement

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
|Square Foot|`sqft`|
|Tsubo|`tsubo`|

## Development
### TODO
- [ ] Add/Subtract Method
- [ ] Length.toArea
- [ ] Custom Unit rename (ex ft2 for sqft)
- [ ] Volume
- [ ] Weight

### Build
    npm run build
### Test
    npm run test
### Release
    npm publish
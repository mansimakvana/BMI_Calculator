// App.js (React Component)

import { useState } from 'react';
import './BMICalculator.css'

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const calculateBMI = (weight, height) => {
    if (!weight || !height || height <= 0) return null;
    const bmiValue = weight / (height * height);
    return bmiValue.toFixed(1);
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
    if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
    return 'Obese';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const bmiValue = calculateBMI(weightNum, heightNum);

    if (bmiValue) {
      setBmi(bmiValue);
      setCategory(determineCategory(bmiValue));
    } else {
      setBmi(null);
      setCategory('');
    }
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter your weight in kg"
            min="0"
          />
        </div>
        <div>
          <label>Height (m): </label>
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            placeholder="Enter your height in meters"
            min="0"
            step="0.01"
          />
        </div>
        <button type='submit' className='calculate-bmi'>Calculate BMI</button>
      </form>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h4>BMI Category: {category}</h4>
        </div>
      )}

      {bmi === null && category === '' && (
        <div>
          <h3>Please enter valid weight and height to calculate your BMI.</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const resultDiv = document.getElementById('bmiResult');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let status = '';

        if (bmi < 18.5) status = 'Zayıf';
        else if (bmi < 24.9) status = 'Normal Kilolu';
        else if (bmi < 29.9) status = 'Fazla Kilolu';
        else status = 'Obez';

        resultDiv.innerHTML = `VKİ Değeriniz: <span style="color: var(--primary);">${bmi}</span> (${status})`;
    } else {
        resultDiv.innerHTML = '<span style="color: #ff4444;">Lütfen geçerli değerler girin.</span>';
    }
}
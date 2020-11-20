function solve(hExam, mExam, hCome, mCome) {
    hExam = Number(hExam);
    mExam = Number(mExam);
    hCome = Number(hCome);
    mCome = Number(mCome);

    let mMinutes = 0;
    let hHours = 0;
    if (hExam > hCome) {
        if (hExam - 1 > hCome) {
            hHours = (hExam - 1) - hCome
        }
        mMinutes = 60 - mCome;
        mMinutes = mMinutes + mExam;
        if (mMinutes >= 60) {
            hHours += Math.floor(mMinutes / 60);
            mMinutes = mMinutes - Math.floor(mMinutes / 60) * 60;
            if (hHours === 0 && mMinutes <= 30) {
                console.log("On time");
                console.log(`${mMinutes} minutes before the start`);
            } else {
                if (mMinutes < 10) {
                    mMinutes = `0${mMinutes}`;
                }
                console.log("Early");
                console.log(`${hHours}:${mMinutes} hours before the start`);
            }
        } else {

            if (mMinutes <= 30) {
                if (hHours > 0) {
                    console.log("Early");
                    console.log(`${hHours}:${mMinutes} hours before the start`);
                } else {
                    console.log("On time");
                    console.log(`${mMinutes} minutes before the start`);
                }

            } else {
                console.log("Early");
                console.log(`${mMinutes} minutes before the start`);
            }
        }

    }
    if (hExam === hCome) {
        if (mExam === mCome) {
            console.log("On time");
        } else if (mExam > mCome) {
            mMinutes = mExam - mCome;
            if (mMinutes <= 30) {
                console.log("On time");
                console.log(`${mMinutes} minutes before the start`);
            } else if (mMinutes > 30) {
                console.log("Early");
                console.log(`${mMinutes} minutes before the start`);
            }
        } else if (mExam < mCome) {
            mMinutes = mCome - mExam;
            console.log("Late");
            console.log(`${mMinutes} minutes after the start`);
        }
    }
    if (hExam < hCome) {
        if (hExam + 1 < hCome) {
            hHours = hCome - (hExam + 1);
        }
        mMinutes = 60 - mExam;
        mMinutes = mMinutes + mCome;
        if (mMinutes >= 60) {
            hHours += Math.floor(mMinutes / 60);
            mMinutes = mMinutes - Math.floor(mMinutes / 60) * 60;
            if (mMinutes < 10) {
                mMinutes = `0${mMinutes}`;
            }
            console.log("Late");
            console.log(`${hHours}:${mMinutes} hours after the start`);
        } else {
            if (mMinutes < 10) {
                mMinutes = `0${mMinutes}`;
            }
            if (hHours > 1) {
                console.log("Late");
                console.log(`${hHours}:${mMinutes} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${mMinutes} minutes after the start`);
            }


        }
    }
}
// da opravq kogato e zakusnql s po malko ot chas da izpisva samo minutite
// 61-69 kogato minutite sa po malko ot 60 no e zakusnql s poveche ot chas 
solve("9",
    "15",
    "10",
    "15")




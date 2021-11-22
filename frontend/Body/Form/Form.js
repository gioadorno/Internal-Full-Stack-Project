import { OuterDiv, InnerDiv, TitleDiv, FormTitle, FormBody, InputBox, QuestionDiv, Question, DescriptionDiv, Description, InputDiv, Input, Select, ButtonDiv, Button, EmptyDiv, TextArea, RadioButtonDiv, RadioDiv, RadioLabel, RadioInput, ImageDiv, Img, Error, SubmitComplete } from "./styles";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useSelector } from "react-redux";
import FileBase from 'react-file-base64';
import { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { createProp } from "../../../../../../actions/properties";
import { createMarker } from "../../../../../../actions/markers";
import dotenv from 'dotenv';
dotenv.config();



const Form = ({ formTitle, formQuestion, description, markets, submit, inputType, radio, value, radioName, classes, addressFill, apiKey, style, errorMessage, submitComplete }) => {

    // Format Money Input Fields
    let currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
    let regexpr2 = /[A-Za-z$,]+/g;
    const arv = document.querySelector('.arv');
    const netPrice = document.querySelector('.netPrice');
    const salePrice = document.querySelector('.salePrice');
    const emd = document.querySelector('.emd');
    const optionFee = document.querySelector('.optionFee');

    // ARV
    const arvInput = (e) => {
        if (arv.value === "" || arv.value === "$") {
            arv.value = 0;
            //to ensure that the default $0 remains
            arv.value = currencyFormat.format(parseFloat(arv.value));
            arv.value = "$" + arv.value;
        }
        let last = arv.value.slice(-1);
        if (e.data != "." && last != ".") {
            arv.value = arv.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
            arv.value = currencyFormat.format(parseFloat(arv.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
            arv.value = "$" + arv.value; //simply concatenates the $ to the front of the number
        }
    };

    const arvKeyDown = () => {
        //ensures that the number is properly formatted before being displayed to console.
        arv.value = arv.value.replace(regexpr2, "");
        arv.value = currencyFormat.format(parseFloat(arv.value));
        arv.value = "$" + arv.value;


    };


    // Net Price
    const netInput = (e) => {
        if (netPrice.value === "" || netPrice.value === "$") {
            netPrice.value = 0;
            //to ensure that the default $0 remains
            netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
            netPrice.value = "$" + arv.value;
        }
        let last = netPrice.value.slice(-1);
        if (e.data != "." && last != ".") {
            netPrice.value = netPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
            netPrice.value = currencyFormat.format(parseFloat(netPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
            netPrice.value = "$" + netPrice.value; //simply concatenates the $ to the front of the number
        }
    };

    const netKeyDown = () => {

        //ensures that the number is properly formatted before being displayed to console.
        netPrice.value = netPrice.value.replace(regexpr2, "");
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + netPrice.value;
    };


    // Sale Price
    const saleInput = (e) => {
        if (salePrice.value === "" || salePrice.value === "$") {
            salePrice.value = 0;
            //to ensure that the default $0 remains
            salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
            salePrice.value = "$" + arv.value;
        }
        let last = salePrice.value.slice(-1);
        if (e.data != "." && last != ".") {
            salePrice.value = salePrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
            salePrice.value = currencyFormat.format(parseFloat(salePrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
            salePrice.value = "$" + salePrice.value; //simply concatenates the $ to the front of the number
        }
    };

    const saleKeyDown = () => {
            //ensures that the number is properly formatted before being displayed to console.
            salePrice.value = salePrice.value.replace(regexpr2, "");
            salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
            salePrice.value = "$" + salePrice.value;
    };


    // EMD
    const emdInput = (e) => {
        if (emd.value === "" || emd.value === "$") {
            emd.value = 0;
            //to ensure that the default $0 remains
            emd.value = currencyFormat.format(parseFloat(emd.value));
            emd.value = "$" + arv.value;
        }
        let last = emd.value.slice(-1);
        if (e.data != "." && last != ".") {
            emd.value = emd.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
            emd.value = currencyFormat.format(parseFloat(emd.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
            emd.value = "$" + emd.value; //simply concatenates the $ to the front of the number
        }
    };

    const emdKeyDown = () => {
        emd.value = emd.value.replace(regexpr2, "");
        emd.value = currencyFormat.format(parseFloat(emd.value));
        emd.value = "$" + emd.value;
    };


    // Option Fee
    const optionFeeInput = (e) => {
        if (optionFee.value === "" || optionFee.value === "$") {
            optionFee.value = 0;
            //to ensure that the default $0 remains
            optionFee.value = currencyFormat.format(parseFloat(optionFee.value));
            optionFee.value = "$" + arv.value;
        }
        let last = optionFee.value.slice(-1);
        if (e.data != "." && last != ".") {
            optionFee.value = optionFee.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
            optionFee.value = currencyFormat.format(parseFloat(optionFee.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
            optionFee.value = "$" + optionFee.value; //simply concatenates the $ to the front of the number
        }
    };

    const optionFeeKeyDown = () => {
        optionFee.value = optionFee.value.replace(regexpr2, "");
        optionFee.value = currencyFormat.format(parseFloat(optionFee.value));
        optionFee.value = "$" + optionFee.value;
    }

    // Address Input

    const [addressValue, setValue] = useState('');


const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8',
    onPlaceSelected: (place) => {
        console.log(place.formatted_address.replace(', USA', ''));
        
    },
    options: {
        types: ["address"],
        componentRestrictions: { country: "us" },
    },
    });


    // Format Phone Number Field (Automated for users to input numbers and insert dashes/paranthesis automatically)
    const onKey = (e) => {
        const phone = document.querySelector('.phone');

        let regexpr0 = /\D/g

        let cNum = phone.value.replace(regexpr0, "");

    
        //Adds parenthesis and dashes to format phone number
        if (cNum.length < 3) {
            phone.value = cNum.substring(0)
        }
        if (3 < cNum.length && cNum.length <= 6) {
            phone.value = "(" + cNum.substring(0,3) + ")-" + cNum.substring(3)
        }
        if (7 <= cNum.length) {
            phone.value = "(" + cNum.substring(0,3) + ")-" + cNum.substring(3, 6) + "-" + cNum.substring(6)
        }


        let rawNumbers = phone.value.replace(regexpr0, "");


        if ( rawNumbers.length > 9 && e.key !== "Backspace") {
            e.preventDefault()
        };

    }
    
    const onKey2 = (e) => {
        const phone2 = document.querySelector('.phone2');

        let regexpr1 = /\D/g
        let cNum2 = phone2.value.replace(regexpr1, "");


        // Phone2
        if (cNum2.length < 3) {
            phone2.value = cNum2.substring(0)
        }
        if (3 < cNum2.length && cNum2.length <= 6) {
            phone2.value = "(" + cNum2.substring(0,3) + ")-" + cNum2.substring(3)
        }
        if (7 <= cNum2.length) {
            phone2.value = "(" + cNum2.substring(0,3) + ")-" + cNum2.substring(3, 6) + "-" + cNum2.substring(6)
        }

        let rawNumbers2 = phone2.value.replace(regexpr1, "");

        if ( rawNumbers2.length > 9 && e.key !== "Backspace") {
            e.preventDefault()
        };
    };


    const props = useSelector((state) => state.posts);



    



        const [file, setFile] = useState('');

        const fileHandler = (e) => {
            console.log(e.target.files[0])
            setFile(e.target.files[0])
            let reader = new FileReader();
            reader.onload = function(e) {
              setFile(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        };


            // Get Input Values


    const [postData, setPostData] = useState({
        name: '',
        writtenOffer: '',
        supplier: '',
        supplierName: '',
        supplierEmail: '',
        supplierPhone: '',
        address: ''.replace(', USA', ''),
        arv: '',
        netPrice: '',
        salePrice: '',
        emd: '',
        optionFee: '',
        dealSplit: '',
        jvAgreement: '',
        additionalCost: '',
        closingCost: '',
        coe: '',
        ipLength: '',
        titleCompany: '',
        titleOfficer: '',
        titleEmail: '',
        titlePhone: '',
        typeAccess: '',
        postPossession: '',
        leaseDetails: '',
        tenantOccupied: '',
        leaseTerm: '',
        notes: '',
        beds: '',
        baths: '',
        parking: '',
        pool: '',
        livingArea: '',
        lotSize: '',
        year: '',
        pictureLink: '',
        market: '',
        propPhoto: '',
    })


    const dispatch = useDispatch();

    


        // Submit Form
        const handleSubmit = (e) => {
            e.preventDefault()

            document.querySelector('.submitComplete').style.display = 'flex';

            console.log(postData);
            
            
            dispatch(createProp(postData));
            
            
            
            getGeocode({address : postData.address})
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                const { lat, lng } = latLng;
                
                const markers = {
                    address: postData.address,
                    lat: lat,
                    lng: lng,
                    arv: postData.arv,
                    salePrice: postData.salePrice,
                    beds: postData.beds,
                    baths: postData.baths,
                    parking: postData.parking,
                    pool: postData.pool,
                    livingArea: postData.livingArea,
                    lotSize: postData.lotSize,
                    year: postData.year,
                    pictureLink: postData.pictureLink,
                    market: postData.market,
                    propPhoto: postData.propPhoto
                };
                
                
                console.log(markers)
                
                dispatch(createMarker(markers));
            });
        
        
        };


        // Error Message if Email Invalid
        const emailError1 = () => {

            document.querySelector('.emailInput').value.includes('@') ? document.querySelector('.errorMessage').style.display = 'none' : document.querySelector('.errorMessage').style.display = 'flex';
        }
        

        const removeError1 = () => {
                document.querySelector('.errorMessage').style.display = 'none';
        }

        const emailError2 = () => {
            
            document.querySelector('.emailInput2').value.includes('@') ? document.querySelector('.errorMessage').style.display = 'none' : document.querySelector('.errorMessage').style.display = 'flex';
        }
        

        const removeError2 = () => {
                document.querySelector('.errorMessage2').style.display = 'none';
        }





        // Close(X) Button
        const hoverRed = () => {
            document.querySelector('.closeButton').style.color = 'red';
        };

        const mouseOut = () => {
            document.querySelector('.closeButton').style.color = 'white';
        };

        const closeForm = () => {
            document.querySelector('.form').style.display = 'none';
            document.querySelector('.formButton').style.display = 'block'
        };
        // 

        // Photo Upload


        





    return (
        <OuterDiv className={classes.outerDiv}>
            <CloseIcon className={classes.closeButton} style={style.closeButton} onMouseOver={hoverRed} onMouseOut={mouseOut} onClick={closeForm} />
            <InnerDiv >
                <TitleDiv>
                    <FormTitle>{formTitle}</FormTitle>
                </TitleDiv>
                <FormBody onSubmit={handleSubmit} >
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.name}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.employeeName}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, name: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.writtenOffer}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, writtenOffer: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.writtenOffer.yes} name={radioName.writtenOffer} />
                                    <RadioLabel>
                                        {radio.writtenOffer.yes}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.writtenOffer.no} name={radioName.writtenOffer} />
                                    <RadioLabel>
                                        {radio.writtenOffer.no}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.supplier}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, supplier: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.supplier.directSeller} name={radioName.supplier} />
                                    <RadioLabel>
                                    {radio.supplier.directSeller}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.supplier.wholesaler} name={radioName.supplier} />
                                    <RadioLabel>
                                    {radio.supplier.wholesaler}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.supplier.agent} name={radioName.supplier} />
                                    <RadioLabel>
                                    {radio.supplier.agent}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.supplierName}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, supplierName: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.supplierEmail}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>
                        <Error className={classes.errorMessage}>{errorMessage}</Error>
                        </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input  type={inputType.text} className={classes.emailInput} onBlur={emailError1} onFocus={removeError1} onChange={e => setPostData({ ...postData, supplierEmail: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.supplierPhone}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.phone} type={inputType.text} onKeyDown={onKey} onChange={e => setPostData({ ...postData, supplierPhone: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.address}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.address}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input ref={ref} onBlur={(e) => setPostData({ ...postData, address: e.target.value})} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.arv}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.arv} onKeyDown={arvKeyDown} onInput={arvInput} type={inputType.text} onChange={e => setPostData({ ...postData, arv: e.target.value })} renderInput={(params) => <Input {...params} /> } />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.netPrice}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.netPrice} onKeyDown={netKeyDown} onInput={netInput} type={inputType.text} onChange={e => setPostData({ ...postData, netPrice: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.salePrice}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.salePrice} onKeyDown={saleKeyDown} onInput={saleInput} type={inputType.text} onChange={e => setPostData({ ...postData, salePrice: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.emd}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.emd} onKeyDown={emdKeyDown} onInput={emdInput} type={inputType.text} onChange={e => setPostData({ ...postData, emd: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.optionFee}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.optionFee} onKeyDown={optionFeeKeyDown} onInput={optionFeeInput} type={inputType.text} onChange={e => setPostData({ ...postData, optionFee: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.dealSplit}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, dealSplit: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.dealSplit.oneHundred} name={radioName.dealSplit} />
                                    <RadioLabel>
                                    {radio.dealSplit.oneHundred}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.dealSplit.fiftyFifty} name={radioName.dealSplit} />
                                    <RadioLabel>
                                    {radio.dealSplit.fiftyFifty}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.dealSplit.other} name={radioName.dealSplit} />
                                    <RadioLabel>
                                    {radio.dealSplit.other}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.jvAgreement}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, jvAgreement: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.jvAgreement.yes} name={radioName.jvAgreement} />
                                    <RadioLabel>
                                    {radio.jvAgreement.yes}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.jvAgreement.no} name={radioName.jvAgreement} />
                                    <RadioLabel>
                                    {radio.jvAgreement.no}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.additionCost}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, additionalCost: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.closingCost}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, closingCost: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.closingCost.yes} name={radioName.closingCost} />
                                    <RadioLabel>
                                    {radio.closingCost.yes}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.closingCost.no} name={radioName.closingCost} />
                                    <RadioLabel>
                                    {radio.closingCost.no}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.coe}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.date} onChange={e => setPostData({ ...postData, coe: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.ipLength}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, ipLength: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.titleCompany}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, titleCompany: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.titleOfficer}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, titleOfficer: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.titleEmail}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>
                            <Error className={classes.errorMessage2}>{errorMessage}</Error>
                        </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} className={classes.emailInput2} onBlur={emailError2} onFocus={removeError2} onChange={e => setPostData({ ...postData, titleEmail: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.titlePhone}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input className={classes.phone2} type={inputType.text} onKeyDown={onKey2} onChange={e => setPostData({ ...postData, titlePhone: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.typeAccess}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, typeAccess: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.typeAccess.appointment} name={radioName.typeAccess} />
                                    <RadioLabel>
                                    {radio.typeAccess.appointment}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.typeAccess.lockBox} name={radioName.typeAccess} />
                                    <RadioLabel>
                                    {radio.typeAccess.lockBox}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.typeAccess.noAccess} name={radioName.typeAccess} />
                                    <RadioLabel>
                                    {radio.typeAccess.noAccess}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.postPossession}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, postPossession: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.postPossession.yes} name={radioName.postPossession} />
                                    <RadioLabel>
                                    {radio.postPossession.yes}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.postPossession.no} name={radioName.postPossession} />
                                    <RadioLabel>
                                    {radio.postPossession.no}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.leaseDetails}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, leaseDetails: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.leaseDetails.vacant} name={radioName.leaseDetails} />
                                    <RadioLabel>
                                    {radio.leaseDetails.vacant}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.leaseDetails.tenantOccupied} name={radioName.leaseDetails} />
                                    <RadioLabel>
                                    {radio.leaseDetails.tenantOccupied}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.leaseDetails.tenantVacant} name={radioName.leaseDetails} />
                                    <RadioLabel>
                                    {radio.leaseDetails.tenantVacant}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.leaseDetails.ownerOccupied} name={radioName.leaseDetails} />
                                    <RadioLabel>
                                    {radio.leaseDetails.ownerOccupied}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={radio.leaseDetails.other} name={radioName.leaseDetails} />
                                    <RadioLabel>
                                    {radio.leaseDetails.other}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.tenantOccupied}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, tenantOccupied: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.leaseTerm}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, leaseTerm: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.additionalNotes}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <TextArea onChange={e => setPostData({ ...postData, notes: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.beds}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.number} onChange={e => setPostData({ ...postData, beds: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.baths}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, baths: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.parking}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.parking}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, parking: e.target.value })}>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.garage} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.garage}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.carport} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.carport}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.noParking} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.noParking}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.garageDetached} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.garageDetached}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.onStreet} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.onStreet}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                                    <RadioButtonDiv>
                                        <RadioInput type={inputType.radio} value={value.garage.notAvailable} name={radioName.garage} />
                                        <RadioLabel>
                                            {value.garage.notAvailable}
                                        </RadioLabel>
                                    </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.pool}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.pool}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <RadioDiv onChange={e => setPostData({ ...postData, pool: e.target.value })}>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={value.pool.poolYes} name={radioName.pool} />
                                    <RadioLabel>
                                        {radio.pool.poolYes}
                                    </RadioLabel>
                                </RadioButtonDiv>
                                <RadioButtonDiv>
                                    <RadioInput type={inputType.radio} value={value.pool.poolNo} name={radioName.pool} />
                                    <RadioLabel>
                                        {radio.pool.poolNo}
                                    </RadioLabel>
                                </RadioButtonDiv>
                            </RadioDiv>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.livingArea}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, livingArea: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.lotSize}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostData({ ...postData, lotSize: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.year}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.number} onChange={e => setPostData({ ...postData, year: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.picLink}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description></Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.url} onChange={e => setPostData({ ...postData, pictureLink: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.market}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.market}</Description>
                        </DescriptionDiv>
                            <InputDiv>
                                <Select onChange={e => setPostData({ ...postData, market: e.target.value })}>
                                    <option />
                                    <option value={markets.orlando}>
                                        {markets.orlando}
                                    </option>
                                    <option value={markets.tampa}>
                                        {markets.tampa}
                                    </option>
                                    <option value={markets.newark}>
                                        {markets.newark}
                                    </option>
                                    <option value={markets.saltLake}>
                                        {markets.saltLake}
                                    </option>
                                    <option value={markets.charlotte}>
                                        {markets.charlotte}
                                    </option>
                                    <option value={markets.columbus}>
                                        {markets.columbus}
                                    </option>
                                    <option value={markets.kansasCity}>
                                        {markets.kansasCity}
                                    </option>
                                    <option value={markets.stLouis}>
                                        {markets.stLouis}
                                    </option>
                                    <option value={markets.austin}>
                                        {markets.austin}
                                    </option>
                                    <option value={markets.atlanta}>
                                        {markets.atlanta}
                                    </option>
                                    <option value={markets.sanAntonio}>
                                        {markets.sanAntonio}
                                    </option>
                                </Select>
                            </InputDiv>
                    </InputBox>
                    <InputBox style={{ height: '35em' }}>
                        <QuestionDiv>
                            <Question>{formQuestion.propPhoto}</Question>
                        </QuestionDiv>
                        <ImageDiv>
                                <Img src={postData.propPhoto} />
                        </ImageDiv>
                        <DescriptionDiv>
                        <Description>{description.propPhoto}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <FileBase type={inputType.file} onDone={({base64}) => setPostData({ ...postData, propPhoto: base64  })} onChange={fileHandler} multiple={false}  />
                        </InputDiv>
                    </InputBox>
                    <ButtonDiv>
                        <SubmitComplete className={classes.submitComplete}>
                            {submitComplete}
                        </SubmitComplete>
                        <Button type='submit'>
                            {submit}
                        </Button>
                        <EmptyDiv />
                    </ButtonDiv>
                    
                </FormBody>
            </InnerDiv>
        </OuterDiv>
    )
}

Form.defaultProps = {
    addressFill: '',
    formTitle: 'Property Form',
    submit: 'Submit',
    classes: {
        address: 'address',
        outerDiv: 'form',
        closeButton: 'closeButton',
        phone: 'phone',
        phone2: 'phone2',
        arv: 'arv',
        netPrice: 'netPrice',
        salePrice: 'salePrice',
        emd: 'emd',
        optionFee: 'optionFee',
        emailInput: 'emailInput',
        errorMessage: 'errorMessage',
        emailInput2: 'emailInput2',
        errorMessage2: 'errorMessage2',
        submitComplete: 'submitComplete'
    },
    formQuestion: {
        name: 'Your Name',
        writtenOffer: "Written Offer",
        supplier: "Who is the Supplier",
        supplierName: 'Name of Supplier/Agent',
        supplierEmail: "Supplier's Email",
        supplierPhone: "Supplier's Phone Number",
        address: 'Property Address',
        arv: 'ARV',
        netPrice: 'Net Price',
        salePrice: 'Sale Price Expectation',
        emd: 'Earnest Money Deposit',
        optionFee: 'Option Fee',
        dealSplit: 'How are we splitting this deal with the Supplier?',
        jvAgreement: 'Do we need a JV agreement?',
        additionCost: 'Additional Cost',
        closingCost: 'Are we paying closing cost?',
        coe: 'When is COE',
        ipLength: 'IP Length',
        titleCompany: 'Title Company/Attorney Name',
        titleOfficer: 'Title Officer Name',
        titleEmail: 'Title Officer Email',
        titlePhone: "Title Company's Phone Number",
        typeAccess: 'Type of Access',
        postPossession: 'Post Possession',
        leaseDetails: 'Lease Details',
        tenantOccupied: 'If tenant occupied, what is current rent',
        leaseTerm: 'If tenant occupied, what is lease term',
        additionalNotes: 'Additional Notes Supplier/Agent Mentioned',
        beds: 'Number of Bedrooms',
        baths: 'Number of Baths',
        parking: 'Parking',
        pool: 'Pool',
        livingArea: 'Living Area(Sqft)',
        lotSize: 'Lot Size(Sqft/Acres)',
        year: 'Year Built',
        picLink: 'Link to Pictures',
        market: 'Market',
        propPhoto: 'Property Photo'
    },
    description: {
        employeeName: 'Employee that represents this property',
        employeePhone: "",
        employeeEmail: "",
        address: 'Address of Property',
        additionalNotes: '',
        beds: '',
        baths: '',
        parking: 'Select Type of Parking',
        pool: 'Does the Property have a pool?',
        livingArea: '',
        lotSize: '',
        year: '',
        picLink: '',
        market: 'Select what Market this property is in',
        propPhoto: 'Property Photo to be shown on Map'
    },
    markets: {
        orlando: 'Orlando, FL',
        memphis: 'Memphis, TN',
        tampa: 'Tampa, FL',
        newark: 'Newark, NJ',
        saltLake: 'Salt Lake City, UT',
        charlotte: 'Charlotte, NC',
        columbus: 'Columbus, OH',
        kansasCity: 'Kansas City, MO',
        stLouis: 'St. Louis, MO',
        austin: 'Austin, TX',
        atlanta: 'Atlanta, GA',
        sanAntonio: 'San Antonio, TX'
    },
    inputType: {
        text: 'text',
        radio: 'radio',
        email: 'email',
        date: 'date',
        select: 'select',
        number: 'number',
        url: 'url',
        file: 'file'
    },
    radio: {
        pool: {
            poolYes: 'Yes',
            poolNo: 'No'
        },
        writtenOffer: {
            yes: 'Yes - We need to write the contract',
            no: 'No - Agent is writing the contract'
        },
        supplier: {
            directSeller: 'Direct to Seller',
            wholesaler: 'Wholesaler',
            agent: 'Agent'
        },
        dealSplit: {
            oneHundred: '100',
            fiftyFifty: '50/50',
            other: 'Other'
        },
        jvAgreement: {
            yes: 'Yes',
            no: 'No'
        },
        closingCost: {
            yes: 'Yes',
            no: 'No'
        },
        typeAccess: {
            appointment: 'By Appointment',
            lockBox: 'Lockbox',
            noAccess: 'No Access'
        },
        postPossession: {
            yes: 'Yes',
            no: 'No'
        },
        leaseDetails: {
            vacant: 'Vacant',
            tenantOccupied: 'Tenant Occupied - Wants to continue rent',
            tenantVacant: 'Tentant Occupied - Vacant @ COE',
            ownerOccupied: 'Owner Occupied - Vacant @ COE',
            other: 'Other'
        }
    },
    radioName: {
        pool: 'pool',
        garage: 'garage',
        writtenOffer: 'writtenOffer',
        supplier: 'supplier',
        dealSplit: 'dealSplit',
        jvAgreement: 'jvAgreement',
        closingCost: 'closingCost',
        typeAcsess: 'typeAccess',
        postPossession: 'postPossession',
        leaseDetails: 'leaseDetails'
    },
    value: {
        pool: {
            poolYes: 'Yes',
            poolNo: 'No'
        },
        garage: {
            garage: 'Garage',
            carport: 'Carport',
            noParking: 'No Parking',
            garageDetached: 'Garage - Detached',
            onStreet: 'On Street',
            notAvailable: 'N/A'
        }
    },
    apiKey: "AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8",
    style: {
        closeButton: {
            position: 'absolute',
            top: '1em',
            left: '1em',
            zIndex: "2",
            width: '2em',
            height: '2em',
            color: 'white'
        }
    },
    errorMessage: 'Invalid: Email Address does not contain @',
    submitComplete: 'Form has been submitted Successfully'
};

export default Form

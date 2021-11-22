import { TBody, TRow, TD, A, FilterDiv, FilterName, Filter } from "./styles";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid' //For Keys
import $ from 'jquery';


const TableBody = ({ pictures, filterName, text, classes }) => {
    
    const props = useSelector((state) => state.posts);

    // Filter
    $(document).ready(function() {
        $(".dispoFilter").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".dispoBody .dispoRow").filter(function() {
                $(this).toggle($(this).text()
                .toLowerCase().indexOf(value) > -1)
            });
        });
    });



    return (
        <>
        <FilterDiv>
            <FilterName>{filterName}</FilterName>
            <Filter className={classes.filter} type={text}  />
        </FilterDiv>
        {props.map((prop) => {
            return(
            <TBody className={classes.tableBody} key={uuidv4()}>
                <TRow className={classes.tableRow} key={uuidv4()}>
                    <TD key={uuidv4()}>{prop.name}</TD>
                    <TD key={uuidv4()}>{prop.writtenOffer}</TD>
                    <TD key={uuidv4()}>{prop.supplier}</TD>
                    <TD key={uuidv4()}>{prop.supplierName}</TD>
                    <TD key={uuidv4()}>{prop.supplierEmail}</TD>
                    <TD key={uuidv4()}>{prop.supplierPhone}</TD>
                    <TD key={uuidv4()}>{prop.address}</TD>
                    <TD key={uuidv4()}>{prop.arv}</TD>
                    <TD key={uuidv4()}>{prop.netPrice}</TD>
                    <TD key={uuidv4()}>{prop.salePrice}</TD>
                    <TD key={uuidv4()}>{prop.emd}</TD>
                    <TD key={uuidv4()}>{prop.optionFee}</TD>
                    <TD key={uuidv4()}>{prop.dealSplit}</TD>
                    <TD key={uuidv4()}>{prop.jvAgreement}</TD>
                    <TD key={uuidv4()}>{prop.additionalCost}</TD>
                    <TD key={uuidv4()}>{prop.closingCost}</TD>
                    <TD key={uuidv4()}>{prop.coe}</TD>
                    <TD key={uuidv4()}>{prop.ipLength}</TD>
                    <TD key={uuidv4()}>{prop.titleCompany}</TD>
                    <TD key={uuidv4()}>{prop.titleOfficer}</TD>
                    <TD key={uuidv4()}>{prop.titleEmail}</TD>
                    <TD key={uuidv4()}>{prop.titlePhone}</TD>
                    <TD key={uuidv4()}>{prop.typeAccess}</TD>
                    <TD key={uuidv4()}>{prop.postPossession}</TD>
                    <TD key={uuidv4()}>{prop.leaseDetails}</TD>
                    <TD key={uuidv4()}>{prop.tenantOccupied}</TD>
                    <TD key={uuidv4()}>{prop.leaseTerm}</TD>
                    <TD key={uuidv4()}>{prop.notes}</TD>
                    <TD key={uuidv4()}>{prop.beds}</TD>
                    <TD key={uuidv4()}>{prop.baths}</TD>
                    <TD key={uuidv4()}>{prop.parking}</TD>
                    <TD key={uuidv4()}>{prop.pool}</TD>
                    <TD key={uuidv4()}>{prop.livingArea}</TD>
                    <TD key={uuidv4()}>{prop.lotSize}</TD>
                    <TD key={uuidv4()}>{prop.year}</TD>
                    <TD key={uuidv4()}>{prop.market}</TD>
                    <TD key={uuidv4()}><A href={prop.pictureLink}>{pictures}</A></TD>
                </TRow>
            </TBody>
            )
        })}
        </>
    )
}

TableBody.defaultProps = {
    pictures: 'Pictures',
    filterName : 'Table Search:',
    text: 'text',
    classes: {
        filter: 'dispoFilter',
        tableBody: 'dispoBody',
        tableRow: 'dispoRow'
    }
}

export default TableBody

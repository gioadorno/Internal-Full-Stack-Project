import { OuterTable, TitleDiv, TableTitle, AcqTable, THead, HeaderRow, Headers } from "./styles";
import TableBody from './TableBody/TableBody'

const Table = ({ title, headers }) => {
    return (
        <OuterTable>
            <TitleDiv>
                <TableTitle>
                    {title}
                </TableTitle>
            </TitleDiv>
            <AcqTable>
                <THead>
                    <HeaderRow>
                        <Headers>
                            {headers.name}
                        </Headers>
                        <Headers>
                            {headers.writtenOffer}
                        </Headers>
                        <Headers>
                            {headers.supplier}
                        </Headers>
                        <Headers>
                            {headers.supplierName}
                        </Headers>
                        <Headers>
                            {headers.supplierEmail}
                        </Headers>
                        <Headers>
                            {headers.supplierPhone}
                        </Headers>
                        <Headers>
                            {headers.address}
                        </Headers>
                        <Headers>
                            {headers.arv}
                        </Headers>
                        <Headers>
                            {headers.netPrice}
                        </Headers>
                        <Headers>
                            {headers.salePrice}
                        </Headers>
                        <Headers>
                            {headers.emd}
                        </Headers>
                        <Headers>
                            {headers.optionFee}
                        </Headers>
                        <Headers>
                            {headers.dealSplit}
                        </Headers>
                        <Headers>
                            {headers.jvAgreement}
                        </Headers>
                        <Headers>
                            {headers.additionalCost}
                        </Headers>
                        <Headers>
                            {headers.closingCost}
                        </Headers>
                        <Headers>
                            {headers.coe}
                        </Headers>
                        <Headers>
                            {headers.ipLength}
                        </Headers>
                        <Headers>
                            {headers.titleCompany}
                        </Headers>
                        <Headers>
                            {headers.titleOfficer}
                        </Headers>
                        <Headers>
                            {headers.titleEmail}
                        </Headers>
                        <Headers>
                            {headers.titlePhone}
                        </Headers>
                        <Headers>
                            {headers.typeAccess}
                        </Headers>
                        <Headers>
                            {headers.postPossession}
                        </Headers>
                        <Headers>
                            {headers.leaseDetails}
                        </Headers>
                        <Headers>
                            {headers.currentRent}
                        </Headers>
                        <Headers>
                            {headers.leaseTerm}
                        </Headers>
                        <Headers>
                            {headers.additionalNotes}
                        </Headers>
                        <Headers>
                            {headers.beds}
                        </Headers>
                        <Headers>
                            {headers.baths}
                        </Headers>
                        <Headers>
                            {headers.parking}
                        </Headers>
                        <Headers>
                            {headers.pool}
                        </Headers>
                        <Headers>
                            {headers.livingArea}
                        </Headers>
                        <Headers>
                            {headers.lotSize}
                        </Headers>
                        <Headers>
                            {headers.yearBuilt}
                        </Headers>
                        <Headers>
                            {headers.market}
                        </Headers>
                        <Headers>
                            {headers.linkToPics}
                        </Headers>
                    </HeaderRow>
                </THead>
                <TableBody>
                    
                </TableBody>
            </AcqTable>
        </OuterTable>
    )
}

Table.defaultProps = {
    title: 'Acquisitions',
    headers: {
        name: 'Name',
        writtenOffer: 'Written Offer',
        supplier: 'Supplier',
        supplierName: 'Supplier Name',
        supplierEmail: 'Supplier Email',
        supplierPhone: 'Supplier Phone',
        address: 'Property Address',
        arv: 'ARV',
        netPrice: 'Net Price',
        salePrice: 'Sale Price',
        emd: 'EMD',
        optionFee: 'Option Fee',
        dealSplit: 'Deal Split',
        jvAgreement: 'JV Agreement',
        additionalCost: 'Additional Cost',
        closingCost: 'Closing Cost',
        coe: 'COE',
        ipLength: 'IP Length',
        titleCompany: 'Title Company or Attorney Name',
        titleOfficer: 'Title Officer Name',
        titleEmail: 'Title Company Email',
        titlePhone: 'Title Company Phone Number',
        typeAccess: 'Type of Access',
        postPossession: 'Post Possession',
        leaseDetails: 'Lease Details',
        currentRent: 'Current Rent, Tenant Occupied',
        leaseTerm: 'Lease Term, Tenant Occupied',
        additionalNotes: 'Additional Notes of Supplier/Agent',
        beds: 'Beds',
        baths: 'Baths',
        parking: 'Parking',
        pool: 'Pool',
        livingArea: 'Living Area(sqft)',
        lotSize: 'Lot Size',
        yearBuilt: 'Year Built',
        market: 'Market',
        linkToPics: 'Link to Pictures'
    }
}

export default Table

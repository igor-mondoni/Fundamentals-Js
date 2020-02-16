let vTotal, vDesc, vTotalPagoDesc, vPago
function calcularTotal(){
    vTotal = frmPdv.txtTotal.value
    vDesc = frmPdv.txtDesconto.value
    vTotalPagoDesc = vTotal - (vTotal * vDesc) / 100
    console.log(vTotalPagoDesc)
    frmPdv.txtTotalDesconto.value = vTotalPagoDesc.toFixed(2)
};

function calcularDesc(){
    vPago = frmPdv.txtValorPago.value
    console.log(vPago)
    frmPdv.txtTroco.value = vPago - vTotalPagoDesc
};
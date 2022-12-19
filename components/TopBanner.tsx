import Box from "@mui/material/Box";

export default function TopBanner() {
    return <Box sx={{
        height: { md: '180px', xs: 'auto' },
        width: '100%',
        textAlign: 'center',
        background: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Box
            component='img'
            alt="Top Banner"
            src="assets/top_banner.png"
            sx={{
                maxHeight: '70%',
                maxWidth: '100%'
            }} />
    </Box>
}
import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Container,
    Typography,
    Box,
    Grid,
    Paper,
    Button,
    Divider
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';

// Sample featured products data
const featuredProducts = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 199.99,
        rating: 4.5,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health monitoring',
        price: 299.99,
        rating: 4.3,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Laptop Pro',
        description: 'Powerful laptop for professionals',
        price: 1299.99,
        rating: 4.8,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        name: 'Digital Camera',
        description: 'Professional-grade digital camera',
        price: 899.99,
        rating: 4.6,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const features = [
    {
        icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
        title: 'Free Shipping',
        description: 'On orders over $50'
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 40 }} />,
        title: 'Secure Payment',
        description: '100% secure payment'
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
        title: '24/7 Support',
        description: 'Dedicated support'
    },
    {
        icon: <PaymentIcon sx={{ fontSize: 40 }} />,
        title: 'Money Back',
        description: '30 days guarantee'
    }
];

const Home = () => {
    const { user } = useAuth();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
                {/* Hero Section */}
                <Paper
                    sx={{
                        position: 'relative',
                        backgroundColor: 'grey.800',
                        color: '#fff',
                        mb: 4,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                        height: '400px'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: 'rgba(0,0,0,.5)',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Welcome to Our Store
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Discover amazing products at unbeatable prices
                        </Typography>
                        <Button variant="contained" color="primary" size="large" sx={{ width: 'fit-content' }}>
                            Shop Now
                        </Button>
                    </Box>
                </Paper>

                {/* Features Section */}
                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box sx={{ textAlign: 'center', p: 2 }}>
                                <Box sx={{ color: 'primary.main', mb: 2 }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Categories Section */}
                <CategorySection />

                {/* Featured Products Section */}
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Featured Products
                    </Typography>
                    <Grid container spacing={3}>
                        {featuredProducts.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={3}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Newsletter Section */}
                <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Subscribe to Our Newsletter
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Get the latest updates on new products and upcoming sales
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary">
                            Subscribe Now
                        </Button>
                    </Box>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default Home; 
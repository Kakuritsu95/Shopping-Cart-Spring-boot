import httpActions from "./httpActions";
import API_ROUTES from "../api-routes/apiRoutes";
import { AddProduct, UpdateProduct } from "../types/productInterface";

export default {
  getAll: () => httpActions.get(API_ROUTES.product.getAll),
  add: (product: AddProduct) =>
    httpActions.post(API_ROUTES.product.add, product),
  getById: (productId: number) =>
    httpActions.get(API_ROUTES.product.getById(productId)),
  update: (productId: number, product: UpdateProduct) =>
    httpActions.patch(API_ROUTES.product.update(productId), product),
  delete: (productId: number) =>
    httpActions.get(API_ROUTES.product.delete(productId)),
  searchByName: (name: string) =>
    httpActions.get(API_ROUTES.product.searchByName(name)),
  searchByBrand: (brand: string) =>
    httpActions.get(API_ROUTES.product.searchByBrand(brand)),
  searchByCategory: (category: string) =>
    httpActions.get(API_ROUTES.product.searchByCategory(category)),
  searchByBrandAndName: (brand: string, productName: string) =>
    httpActions.get(
      API_ROUTES.product.searchByBrandAndName(brand, productName)
    ),
  searchByCategoryAndBrand: (category: string, brand: string) =>
    httpActions.get(
      API_ROUTES.product.searchByCategoryAndBrand(category, brand)
    ),
};

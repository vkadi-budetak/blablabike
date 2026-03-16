"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Bike } from "@/types/Bike";
import BikeCard from "@/components/catalog/bike-card";
import CatalogPagination from "@/components/catalog/catalog-pagination";
import CatalogMenu from "@/components/catalog/catalog-menu";

export default function CatalogPage() {
  const [allBikes, setAllBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // 1. Читаем фильтры из URL
  const catFilter = searchParams.get("category") || "all";
  const statusFilter = searchParams.get("status") || "all";
  const sortBy = searchParams.get("sort") || "default";

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // 2. Загрузка данных
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api/bikes");
        const data: Bike[] = await res.json();
        setAllBikes(data);
      } catch (e) {
        console.error("Load error:", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // 3. Вычисляем список категорий ДЛЯ МЕНЮ прямо из полученных байков
  const categoriesList = useMemo(() => {
    const names = allBikes
      .map((bike) => bike.category?.name)
      .filter((name): name is string => Boolean(name));
    
    // Оставляем только уникальные названия
    return Array.from(new Set(names));
  }, [allBikes]);

  // 4. Функции обновления URL (чтобы фильтры работали)
  const updateURL = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" || value === "default") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`);
  };

  // 5. Логика фильтрации списка
  const filteredBikes = useMemo(() => {
    let result = [...allBikes];
    
    if (catFilter !== "all") {
      result = result.filter((b) => 
        b.category?.name?.toLowerCase().includes(catFilter.toLowerCase())
      );
    }
    
    if (statusFilter !== "all") {
      const isAvail = statusFilter === "Available";
      result = result.filter((b) => b.isActive === isAvail);
    }

    if (sortBy === "low") {
      result.sort((a, b) => Number(a.pricePerDay) - Number(b.pricePerDay));
    } else if (sortBy === "high") {
      result.sort((a, b) => Number(b.pricePerDay) - Number(a.pricePerDay));
    }
    
    return result;
  }, [allBikes, catFilter, statusFilter, sortBy]);

  // 6. Пагинация
  const totalPages = Math.ceil(filteredBikes.length / itemsPerPage);
  const safePage = currentPage > totalPages && totalPages > 0 ? 1 : currentPage;
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedBikes = filteredBikes.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <div className="p-20 text-center font-bold">LOADING...</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      
   

      {filteredBikes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>

          <CatalogPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={(n) => { setItemsPerPage(n); setCurrentPage(1); }}
            totalItems={filteredBikes.length}
            step={3}
          />
        </>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl text-gray-400">
          No bikes found for &quot;{catFilter}&quot;
        </div>
      )}
    </div>
  );
}